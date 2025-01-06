import { useState } from 'react';
import axios from 'axios';
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap';
import SearchResults from '../components/SearchResults';

const SearchBooks = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const queryBook = (e) => {
        e.preventDefault();
        const cachedResults = localStorage.getItem(search);
        if (cachedResults) {
            setData(JSON.parse(cachedResults));
            return;
        }
            axios
                .get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAIN0-8SkwNoPS1xinsFMcYg9H9jPCYDbk' + '&maxResults=6')
                .then(res => {
                    const results = res.data.items || [];
                    setData(results);
                    localStorage.setItem(search, JSON.stringify(results));
                })
                .catch(err => console.log(err));
    };

    return (
        <>  
            <Container fluid className='fluid search-books-header'>
                <Row>
                    <Col>
                        <h2>Find your next book</h2>
                        <p>Search for books by title, author, or keyword</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form inline onSubmit={queryBook} className='search-books-form'>
                            <FormControl
                                type="text"
                                placeholder="Search for books"
                                className="mr-sm-2 search-books-input"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button type="submit" className='button-search'>Search</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='text-center my-5'>
                <Row>
                    <Col>
                        <h3>Rezultatele cautarii</h3>
                    </Col>
                </Row>
            </Container>
            
            <div>
                <SearchResults books={bookData}/>
            </div>
        </>
    )
}

export default SearchBooks;


import PropTypes from 'prop-types';
import { Container, Row, Col} from 'react-bootstrap';
import BookCard from './BookCard';

const SearchResults = ({ books }) => {
    return (
        <Container>
            <Row>
                {books.map((book, index) => (
                    <Col key={index} sm={12} md={6} lg={2} className="mb-4">
                        <BookCard
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}
                            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'}
                            price={book.saleInfo && book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : null}
                            description={book.volumeInfo.description ? book.volumeInfo.description : 'No description available'}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


// SearchResults.propTypes = {
//     books: PropTypes.arrayOf(
//         PropTypes.shape({
//             image: PropTypes.string,
//             title: PropTypes.string,
//             author: PropTypes.string,
//         })
//     ).isRequired,
// };
SearchResults.propTypes = {
    books: PropTypes.array.isRequired,
};


export default SearchResults;
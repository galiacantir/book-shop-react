import {Row, Col, Container, Carousel, Button, Badge} from 'react-bootstrap';
import BookDetailsModal from './BookDetailsModal';
import { useState } from 'react';

const Bestsellers= () => {
    const topBestsellers = [
        {
            id: 1,
            title: 'The Silent Patient',
            author: 'Alex Michaelides',
            price: '$15.99',
            description: 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas.',
            image: 'src/assets/book-1.jpg',
        },
        {
            id: 2,
            title: 'Atomic Habits',
            author: 'James Clear',
            price: '$19.99',
            description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
            image: 'src/assets/book-2.jpg',
        },
        {
            id: 3,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            description:'Tells the mystical story of Santiago, an Andalusian shepherd',
            price: '$12.99',
            image: 'src/assets/book-7.jpg',
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleShowModal = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    return (
        <Container className="my-5 top-bestsellers-section">
            <h2 className="text-center mb-4">Top Bestsellers</h2>
            <Carousel indicators={false} interval={2000}>
                {topBestsellers.map((book) => (
                    <Carousel.Item key={book.id}>
                        <Row className="align-items-center">
                            <Col md={5}>
                                <img
                                    className="d-block w-100"
                                    src={book.image}
                                    alt={book.title}
                                />
                            </Col>
                            
                            <Col md={7} className="p-4">
                                <Badge bg="warning" className="mb-3">
                                    Bestseller
                                </Badge>
                                <h3>{book.title}</h3>
                                <p>
                                    <strong>Author:</strong> {book.author}
                                </p>
                                <p>
                                    <strong>Price:</strong> {book.price}
                                </p>
                                <p>{book.description}</p>
                                <div className="d-flex gap-2">
                                    <Button className='btn-custom'>Buy Now</Button>
                                    <Button onClick={() => handleShowModal(book)} variant="outline-secondary">Details</Button>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
            {selectedBook && (
            <BookDetailsModal
              show={showModal}
              onHide={() => setShowModal(false)}
              book={selectedBook}
              />
              )}
        </Container>

    );
};

export default Bestsellers;
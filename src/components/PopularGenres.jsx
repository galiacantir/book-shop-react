import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PopularGenres = () => {
    const genres = [
        {
            id: 1,
            name: 'Fiction',
            image: 'src/assets/book-3.jpg',
            description: 'Dive into imaginative worlds and compelling stories.',
        },
        {
            id: 2,
            name: 'Non-Fiction',
            image: 'src/assets/book-5.jpg',
            description: 'Explore real stories and factual insights.',
        },
        {
            id: 3,
            name: 'Fantasy',
            image: 'src/assets/book-8.jpg',
            description: 'Step into magical realms full of wonder.',
        },
        {
            id: 4,
            name: 'Biografy',
            image: 'src/assets/books.jpg',
            description: 'Discover futuristic adventures and technological marvels.',
        },
        {
            id: 5,
            name: 'Romantic',
            image: 'src/assets/library.jpg',
            description: 'Lose yourself in heartwarming love stories.',
        },
        {
            id: 6,
            name: 'History',
            image: 'src/assets/reading-time.jpg',
            description: 'Lose yourself in heartwarming love stories.',
        },
        {
            id: 7,
            name: 'Business & Economy',
            image: 'src/assets/library-1.jpg',
            description: 'Lose yourself in heartwarming love stories.',
        },
        {
            id: 8,
            name: 'Religion',
            image: 'src/assets/old-books.jpg',
            description: 'Lose yourself in heartwarming love stories.',
        },
    ];

    return (
        <Container className="my-5 popular-genres-section">
            <h2 className="text-center mb-4">Popular Genres</h2>
            <Row>
                {genres.map((genre) => (
                    <Col key={genre.id} md={3} className="mb-4">
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={genre.image}
                                alt={genre.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{genre.name}</Card.Title>
                                <Card.Text>{genre.description}</Card.Text>
                                <Button variant="primary" href={`#${genre.name.toLowerCase()}`}>
                                    Explore {genre.name}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <Button variant="secondary" href="#all-categories">
                    All Categories
                </Button>
            </div>
        </Container>
    );
};

export default PopularGenres;

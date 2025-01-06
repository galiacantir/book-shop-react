import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

const Categories = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://openlibrary.org/subjects.json'); // API-ul Open Library pentru genuri
                const data = await response.json();
                // Transformă datele API în formatul dorit
                const formattedGenres = Object.keys(data).slice(0, 6).map((genre, index) => ({
                    id: index,
                    name: genre,
                    description: `Explore books in the ${genre} category.`,
                    image: 'https://via.placeholder.com/300x200', // Poți înlocui cu imagini din API dacă sunt disponibile
                }));
                setGenres(formattedGenres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    return (
        <Container className="my-5 popular-genres-section">
            <h2 className="text-center mb-4">Popular Genres</h2>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Row>
                    {genres.map((genre) => (
                        <Col key={genre.id} md={2} className="mb-4">
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
            )}
        </Container>
    );
};

export default Categories;


import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Book Launch: The Journey of Dreams',
            date: '15 January 2025',
            location: 'New York City, Book Lovers',
            description: 'Join us for the exclusive launch of "The Journey of Dreams" by acclaimed author John Doe.',
            image: 'src/assets/book-3.jpg',
        },
        {
            id: 2,
            title: 'Author Meet & Greet: Jane Smith',
            date: '22 January 2025',
            location: 'Online (Zoom Event)',
            description: 'Chat with bestselling author Jane Smith about her latest mystery novel.',
            image: 'src/assets/library-1.jpg',
        },
        {
            id: 3,
            title: 'Literature Festival 2025',
            date: '5-7 February 2025',
            location: 'Los Angeles Convention Center',
            description: 'Experience three days of panels, book signings, and discussions with renowned authors.',
            image: 'src/assets/library.jpg',
        },
    ];

    return (
        <Container className="my-5 upcoming-events-section">
            <h2 className="text-center mb-4">Upcoming Events</h2>
            <Row>
                {events.map(event => (
                    <Col key={event.id} md={4} className="mb-4">
                        <Card className="event-card shadow-sm">
                            <Card.Img variant="top" src={event.image} alt={event.title} />
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>
                                    <strong>Date:</strong> {event.date} <br />
                                    <strong>Location:</strong> {event.location}
                                </Card.Text>
                                <Card.Text className="event-description">{event.description}</Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default UpcomingEvents;

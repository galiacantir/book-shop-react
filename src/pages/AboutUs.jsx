import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
const AboutUs = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Jane Smith',
            role: 'Founder & CEO',
            image: 'src/assets/team-1.jpg',
        },
        {
            id: 2,
            name: 'John Doe',
            role: 'Chief Editor',
            image: 'src/assets/team-2.jpg',
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Marketing Specialist',
            image: 'src/assets/team-3.jpg',
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Marketing Specialist',
            image: 'src/assets/team-3.jpg',
        },
    ];


    return (
        <>
            <header className="header-about text-center">
                <Container>
                    <h2>About Us</h2>
                    <p>
                        Welcome to our bookshop! We are passionate about connecting readers with stories that inspire, educate, and entertain.
                    </p>
                    <Button className='btn-custom'>Explore our collection</Button>
                </Container>
            </header>

            <section className="mission-vision m-5">
                <Container>
                    <Row className='py-5'>
                        
                        <Col md={7}>
                            <h3>Our Mission, Our Story </h3>
                            <p>
                                Our mission is to bring the passion and love for reading books back. whether a regular paper book, or an online edition, we want our readers to know that we appreciate quality and artful storytelling. Join our community and enjoy multiple genres, modern and classic authors, reviews, critics and more! To foster a love for reading and create a community where stories and ideas thrive.
                            </p>
                            <p>
                                Founded in 2010, our bookshop started as a small, independent store. Over the years, we have grown into a thriving
                                community space where readers can connect, share, and discover their next favorite book.
                            </p>
                        </Col>
                        <Col md={5}>
                            <img
                                src="src/assets/reading-time.jpg"
                                alt="Mission"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="team mb-5">
                <Container>
                    <h3 className="text-center mb-4">Our Creative Team</h3>
                    <Row>
                        {teamMembers.map((member) => (
                            <Col key={member.id} md={3} className="mb-4">
                                <Card className="text-center h-100">
                                    <Card.Img
                                        variant="top"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <Card.Body>
                                        <Card.Title>{member.name}</Card.Title>
                                        <Card.Text>{member.role}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Reviews/>

            <section className="join text-center py-5 mb-5">
                <Container>
                    <h3>Join Our Story</h3>
                    <p>Become part of our community and let’s keep the love for books alive!</p>
                    <Button className="btn-custom">
                        Get in Touch
                    </Button>
                </Container>
            </section>
            <Footer/>
        </>
    );
};

export default AboutUs;

import { Container, Row, Col, Badge, Button } from 'react-bootstrap';

const AuthorOfTheMonth = () => {
    const authorOfTheMonth = {
        name: 'Donato Carrisi',
        description:
            'Donato Carrisi è nato nel 1973 a Martina Franca e vive fra Roma e Milano. Ha vinto prestigiosi premi in Italia e all’estero come il Prix Polar e il Prix Livre de Poche in Francia e il Premio Bancarella in Italia.I suoi romanzi, tradotti in più di 30 lingue, hanno venduto milioni di copie.',
        image: 'src/assets/donato-carrisi.png',
        notableWorks: ['La donna dei fiori di carta', 'L’uomo del labirinto', 'La ragazza nella nebbia'],
    };

    return (
        <Container className="my-5 author-of-the-month-section">
            <h2 className="text-center mb-4">Author of the Month</h2>
            <Row className="align-items-center">
                <Col md={6} className="p-4">
                    <Badge bg="info" className="mb-3">
                        Featured Author
                    </Badge>
                    <h3>{authorOfTheMonth.name}</h3>
                    <p>{authorOfTheMonth.description}</p>
                    <h5>Notable Works:</h5>
                    <ul>
                        {authorOfTheMonth.notableWorks.map((work, index) => (
                            <li key={index}>{work}</li>
                        ))}
                    </ul>
                    <Button className="btn-custom">Explore Books</Button>
                </Col>

                <Col md={6}>
                    <img
                        className="d-block w-100 rounded"
                        src={authorOfTheMonth.image}
                        alt={authorOfTheMonth.name}
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AuthorOfTheMonth;
import  { useState } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import Footer from '../components/Footer';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
  const[formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone: '',
    message: '',
  });

  // const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name] : value,
    });
  };

  const handleSubmit = (e) => {
    /*const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setSubmitted(true);
    }
    setValidated(true);
  };*/
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header className="contact-header">
        <Container>
          <h1>Have a Question? <br /> Contact Us!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus, cum, cupiditate esse enim non sequi nostrum incidunt et facere, unde aspernatur. Aperiam dolores deleniti, cumque exercitationem et ullam ut!</p>
        </Container>
      </header>

      {/* <Container className="contact-section">
        <Row>
          <Col md={6}>
            <h4>Contact Form</h4>
            <Form onSubmit={handleSubmit}>
              <Row className='mb-3'>
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formMessage" className='mb-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className="btn-custom btn-sm">Submit</Button>
            </Form>
            {submitted && <p className="mt-3">Thank you for your message. We will get back to you soon.</p>}
          </Col>

          <Col md={6}>
            <Row>
              <Col>
                <h4>Get in touch with us</h4>
                <div className="contact-info">
                  <FaPhone /> <p>Phone</p>
                  <p>+123 456 7890</p>
                </div>
                <div className="contact-info">
                  <FaClock /><p>Opening Hours</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="contact-info">
                  <FaMapMarkerAlt /><p>Address</p>
                  <p>123 Book Street, Booktown, BK 12345</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}

      <Container className="contact-section">
        <Row className="contact-info-row">
          <div className="contact-info">
            <h5><FaClock /> Opening Hours</h5>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="contact-info">
            <h5><FaPhone /> Phone</h5>
            <p>+123 456 7890</p>
            <h5><FaPhone /> E-mail</h5>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-info">
            <h5><FaMapMarkerAlt /> Address</h5>
            <p>123 Book Street, Booktown, BK 12345</p>
            <p>Orasul, Tara</p>
          </div>
        </Row>
        <Row>
          <Col md={6} className="contact-form">
            <Form onSubmit={handleSubmit} className='p-3'>
              <Row className='mb-3'>
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage" className='mb-3 '>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className="btn-custom btn-sm">Send message</Button>
            </Form>
            {submitted && <p className="mt-3">Thank you for your message. We will get back to you soon.</p>}
          </Col>

          <Col md={6} className="contact-image">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484915!2d144.9537363153169!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f3b1d1d!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072871234!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    {/* <Container fluid className='bg-contact-page py-5'>
     
      {submitted && (
        <Alert variant="success" className="text-center">
          Thank you for reaching out! We will get back to you shortly.
        </Alert>
      )}

      <Container>
        <Row>
          <Col className="col-6 ">              
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your message"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please write a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
          </Col>
          <Col className='col-6'>
            
          </Col>
        </Row>

      </Container>

    </Container> */}
    </>
  );
};

export default Contact;

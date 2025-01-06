import { Container, Form, Button } from 'react-bootstrap';

const ContactForm = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Contact Us</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} required />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  </Container>
);

export default ContactForm;

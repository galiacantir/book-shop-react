
import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>&copy; {new Date().getFullYear()} Old Books Store. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
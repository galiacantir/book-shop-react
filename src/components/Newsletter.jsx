import { Container } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <Container fluid className='my-5'>
            <section className="stay-in-touch-section">
                <h2>Stay in Touch with Our Updates</h2>
                <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
                <p><strong>Subscribe and get 50% off</strong></p>
                <form className="newsletter-form">
                    <input
                        type="email"
                        className="newsletter-input"
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit" className="newsletter-button">Subscribe</button>
                </form>
            </section>
        </Container>
    );
};

export default Newsletter;
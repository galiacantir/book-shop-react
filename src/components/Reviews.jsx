import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';



const Review = () => {
    const reviews =[
        {
            name:"John Doe",
            review: "This is an amazing book store! I found so many rare books that I couldn't find anywhere else.",       
        },
        {
            name: "Jane Smith",
            review: "The collection of vintage books is incredible. Highly recommend visiting this store.",
        },
        {
            name: "Emily Johnson",
            review: "Great customer service and a fantastic selection of books. Will definitely come back!",
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((star, index) => {
            return (
                <span key={index}>
                    {index < rating ? <FaStar color="#FFD700" /> : <FaRegStar color="#FFD700" />}
                </span>
            );
        });
    };


    return (
        <Container className='my-5'>
            <section className="reviews-section">
                <h3>What Our Customers Say</h3>
                <Row>
                    {reviews.map((review, index) => (
                        <Col key={index} md={4}>
                            <div className="review-card">
                                
                                <h3>{review.name}</h3>
                                <p>{review.review}</p>
                                <div className="review-stars">{renderStars(review.rating)}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    );
}
export default Review;
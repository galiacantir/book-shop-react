import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BookDetailsModal from './BookDetailsModal';


const BookCard = ({ title, author, image, price, description }) => {
  
  const [showModal, setShowModal] = useState(false);

  const book = {
    title,
    author,
    image,
    price,
    description
  };

  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
        <Card.Body style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</Card.Title>
          <Card.Text style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{author}</Card.Text>
          <Card.Text style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{price ? `$${price}` : 'Price not available'}</Card.Text>
          <Button variant="primary" onClick={() => setShowModal(true)}>Details</Button>
          </Card.Body>
        </Card>
        
        <BookDetailsModal show={showModal} onHide={() => setShowModal(false)} book={ book} />
        
    </>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string
};

export default BookCard;

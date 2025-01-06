
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BookDetailsModal = ({ show, onHide, book }) => (
  <Modal show={show} onHide={onHide} dialogClassName='book-modal-info'>
    <Modal.Header closeButton>
      <Modal.Title>{book.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p><strong>Description:</strong> {book.description ? book.description : 'No description available'}</p>
      <p><strong>Authors:</strong> {book.author ? book.author : 'Unknown Author'}</p>
      <p><strong>Price:</strong> {book.price ? `${book.price} euro` : 'Price not available'}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);
BookDetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default BookDetailsModal;


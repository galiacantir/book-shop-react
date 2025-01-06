import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'
import BookDetailsModal from '../components/BookDetailsModal';
import UpcomingEvents from '../components/UpcomingEvents';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Bestsellers from '../components/Bestsellers';
import AuthorOfTheMonth from '../components/AuthorOfTheMonth';
import PopularGenres from '../components/PopularGenres';


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [newBooks, setNewBooks] = useState([]);
  const [error, setError] = useState(null);

  const bookTitles = [
    "La casa delle voci", 
    "Una stanza piena di gente",
    "1984",
    "The Hobbit",
    "To Kill a Mockingbird",
    "La ragazza del treno", 
  ];

  /*
  useEffect(() => {
    const fetchBooks = async () => {
      const promises = bookTitles.map(title =>
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyCVaGUpO-WSPoKAUtfwx4zYdrF01WUqeCk`)
      );
      const results = await Promise.all(promises);
      const books = results.map(result => {
        const book = result.data.items[0].volumeInfo;
        const saleInfo = result.data.items[0].saleInfo;

        return {
          title: book.title,
          author: book.authors ? book.authors.join(', ') : 'Unknown Author',
          image: book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/150',
          price: saleInfo && saleInfo.listPrice ? `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}` : 'Price not available',
          description: book.description ? book.description : 'No description available'
        };
      });
      setNewBooks(books);
  };

  fetchBooks();
  }, []);*/

  const fetchBooks = async (retryCount = 0) => {
    try {
      const cachedResults = localStorage.getItem('newBooks');
      if (cachedResults) {
        setNewBooks(JSON.parse(cachedResults));
        return;
      }

      const promises = bookTitles.map(title =>
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyCVaGUpO-WSPoKAUtfwx4zYdrF01WUqeCk`)
      );
      const results = await Promise.all(promises);
      const books = results.map(result => {
        const book = result.data.items[0].volumeInfo;
        const saleInfo = result.data.items[0].saleInfo;
        return {
          title: book.title,
          author: book.authors ? book.authors.join(', ') : 'Unknown Author',
          image: book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/150',
          price: saleInfo && saleInfo.listPrice ? `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}` : 'Price not available',
          description: book.description ? book.description : 'No description available'
        };
      });
      setNewBooks(books);
      localStorage.setItem('newBooks', JSON.stringify(books));
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 3) {
        console.log(`Retrying... (${retryCount + 1})`);
        setTimeout(() => fetchBooks(retryCount + 1), 1000 * (retryCount + 1));
      } else {
        console.error('Error fetching books:', error);
        setError('Error fetching books. Please try again later.');
      }
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  // const booksOfTheMonth = [
  //   {
  //     title: "Book of the Month 1",
  //     author: "Author 1",
  //     image: "src/assets/book-1.jpg",
  //     price: 20,
  //     description: "This is a brief description of the book of the month 1."
  //   },
  //   {
  //     title: "Book of the Month 2",
  //     author: "Author 2",
  //     image: "src/assets/book-2.jpg",
  //     price: 25,
  //     description: "This is a brief description of the book of the month 2."
  //   },
  //   {
  //     title: "Book of the Month 3",
  //     author: "Author 3",
  //     image: "src/assets/book-7.jpg",
  //     price: 30,
  //     description: "This is a brief description of the book of the month 3."
  //   }
  // ];

  // const authorOfTheMonth = {
  //   name: "Donato Carrisi",
  //   description: "Donato Carrisi è nato nel 1973 a Martina Franca e vive fra Roma e Milano. Dopo aver studiato giurisprudenza, si è specializzato in criminologia e scienza del comportamento. Scrittore, regista e sceneggiatore di serie televisive e per il cinema, è una firma del Corriere della Sera. È l’autore dei romanzi bestseller internazionali (tutti pubblicati da Longanesi) Il suggeritore, Il tribunale delle anime, La donna dei fiori di carta, L’ipotesi del male, Il cacciatore del buio, La ragazza nella nebbia – dal quale ha tratto il film omonimo con cui ha vinto il David di Donatello per il miglior regista esordiente –, Il maestro delle ombre, L’uomo del labirinto – da cui ha tratto il film omonimo – , Il gioco del suggeritore e La casa delle voci. Ha vinto prestigiosi premi in Italia e all’estero come il Prix Polar e il Prix Livre de Poche in Francia e il Premio Bancarella in Italia.I suoi romanzi, tradotti in più di 30 lingue, hanno venduto milioni di copie.",
  //   image: "src/assets/donato-carrisi.png"
  // };


  return (
  <>

  <header className="d-flex align-items-center text-center home-bg">
    <Container>
      <h1 className="display-4">Discover Timeless Stories</h1>
      <p className="lead">Explore rare and vintage books from our collection.</p>
      <Button className="btn-custom" href="/blog">About Us</Button>
    </Container>
  </header>

  <main>
    <Container className='my-5'>
        <section className="new-arrivals">
          <h2 className="text-center">New Arrivals</h2>
          <p className="text-center">Check out the latest additions to our collection</p>
          <Row className='my-5'>
              {newBooks.map((book, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="h-100 new-arrivals-card">
                    <Row noGutters>
                      <Col md={4}>
                        <Card.Img  src={book.image} alt={book.title} />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
                          <Card.Text><strong>Price:</strong> {book.price} euro</Card.Text>
                          <Button onClick={() => handleShowModal(book)} className='btn-custom btn-sm'>Details</Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
          </Row>
        </section>
    </Container>

    <PopularGenres />
    {/* <Container className='my-5'>
      <section className="books-of-the-month">
        <h2 className="text-center">Books of the Month</h2>
        <Carousel>
          {booksOfTheMonth.map((book, index) => (
            <Carousel.Item key={index}>
              <Row className="align-items-center my-5">
                <Col md={5}>
                  <img
                    className="d-block w-100"
                    src={book.image}
                    alt={book.title}
                  />
                </Col>
                <Col md={7}>
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Price:</strong> {book.price} euro</p>
                  <p>{book.description}</p>
                  <Button onClick={() => handleShowModal(book)} className='btn-custom'>Details</Button>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </Container> */}
    <Bestsellers />
    <AuthorOfTheMonth />
    {/* <Container fluid className='my-5'>
      <section className="author-of-the-month">
        <Container>
        <h2 className="text-center">Author of the Month</h2>
        <Row className="align-items-center">
          <Col md={8}>
            <h3>{authorOfTheMonth.name}</h3>
            <p>{authorOfTheMonth.description}</p>
          </Col>              
          <Col md={4}>
            <img
              className="d-block w-100"
              src={authorOfTheMonth.image}
              alt={authorOfTheMonth.name}
            />
          </Col>
        </Row>
        </Container>
      </section>
    </Container> */}
    
    <UpcomingEvents />
    
    <section className="inspire-section">
      <Container>
        <h2>Inspire Daily Reading</h2>
        <p>Visit your blog</p>
        <Button className="btn-custom" href="/blog">Go to Blog</Button>
      </Container>
    </section>
    
    <Reviews />
    <Newsletter/>
    <Footer/>

  </main>
  
  {selectedBook && (
    <BookDetailsModal
      show={showModal}
      onHide={() => setShowModal(false)}
      book={selectedBook}
      />
      )}
    </>
  );
};
export default Home;

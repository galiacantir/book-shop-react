//import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import CategoryDropDown from './CategoryDropdown';
import { FaSearch } from 'react-icons/fa';

const NavbarMenu = () => {
  /*const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = [
    "Adventure", 
    "Classics", 
    "Fantasy",
    "History",
    "Romance", 
    "Biography",
    "Mystery",
    "Science",
    "Thriller", 
    "Fiction"
  ];*/


  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

  return (
    <Navbar expand="lg" className="navbar-custom py-4"  data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Book Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">Our Story</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>

            {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
              <CategoryDropDown categories={categories} onCategorySelect={handleCategorySelect} />
            </NavDropdown> */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/searchbooks">
              <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
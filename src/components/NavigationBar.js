import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';

function NavBar() {
  return (
    <Router>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">Devon Parson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </Router>
  );
}

export default NavBar;
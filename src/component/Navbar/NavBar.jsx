import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md" className="bg_secondary_color position-sticky top-0 p-3 z-3">
      <Container>
        <Link to='/' className='h3 text_main_color fw-bolder'>START FRAMEWORK</Link>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to='/about' className='px-2 fw-bolder'>ABOUT</NavLink>
            <NavLink to='/portfolio' className='px-2 fw-bolder'>PORTFOLIO</NavLink>
            <NavLink to='contact' className='px-2 fw-bolder'>CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

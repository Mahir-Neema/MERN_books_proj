import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink href='/viewbook'>View Book</NavLink>
            <Nav.Link href="#features">Add Book</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default ColorSchemesExample;

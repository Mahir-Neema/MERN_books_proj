import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import TextExample from './ViewBook'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink as={Link} to="/viewbook">View Book</NavLink>
            <NavLink as={Link} to="/addbook">Add Book</NavLink>
            {/* <Nav.Link href="#pricing">Delete Book</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <TextExample/>  */}
      <Outlet/>
    </>
  );
}

export default ColorSchemesExample;

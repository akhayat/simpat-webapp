import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import './css/navbar.scss';

export function NavBarComponent() {
  return (
    <Navbar className="site-nav mb-4 bg-primary">
      <Container fluid>
        <Navbar.Brand className="text-white" as={Link} to="/">NHANES Data Browser</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link className="text-white" as={Link} to="/">Tables</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/search">Generate</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
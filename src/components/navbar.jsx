import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, createSearchParams, useNavigate } from 'react-router';
import { useForm } from "react-hook-form"
import './css/navbar.scss';

export function NavBarComponent() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    navigate({"pathname": "/search", search: createSearchParams({"q": data.search}).toString(), replace: true});
  }

  return (
    <Navbar className="site-nav mb-4 bg-primary">
      <Container fluid>
        <Navbar.Brand className="text-white" as={NavLink} to="/">NHANES Data Browser</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link className="text-white" as={NavLink} to="/">Tables</Nav.Link>
            <Nav.Link className="text-white" as={NavLink} to="/generate">Generate</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              {...register("search")}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


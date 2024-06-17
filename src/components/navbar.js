import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbr(props) {
  function onSerch(word) {
    props.serche(word);
  }
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container >
       
          <Navbar.Brand className="col-3 mx-auto">Cima New</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="" />
          <Navbar.Collapse id="navbarScroll" className="">
            <Form className="d-flex w-75 my-3 mx-auto my-sm-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 w-100"
              aria-label="Search"
              dir="auto"
              onChange={(e)=>{onSerch(e.target.value)}}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
   
      </Container>
    </Navbar>
  );
}

export default Navbr;

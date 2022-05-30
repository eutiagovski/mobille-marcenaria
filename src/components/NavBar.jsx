import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Móbille Design Marcenaria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Ambientes</Nav.Link>
              <Nav.Link href="#contact">Orçamento</Nav.Link>
              <Nav.Link href="#footer">Fale Conosco</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="fixed-btn">
        <Button
          className="btn btn-danger btn-lg"
          href="https://web.whatsapp.com/send?phone=5521964526521"
          target="_blank"
        >
          <BsIcons.BsWhatsapp /> Solicite seu Orçamento
        </Button>
      </div>
    </>
  );
};

export default NavBar;

import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavBar.css';

function NavBarBoost() {
  return (
    <Navbar expand="lg navbar-dark">
      <Container>
        <Navbar.Brand href="#home"><img src='/img/logo.png' alt='logo' width={30} />CoinFlex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#s2">Features</Nav.Link>
            <Nav.Link href="#currency">Currency</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarBoost
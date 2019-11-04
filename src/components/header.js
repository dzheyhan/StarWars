import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { FaSignOutAlt } from 'react-icons/fa';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/episodes">Episodes</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Characters
          </Nav.Link>
          <Nav.Link href="/logout">
            <FaSignOutAlt />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

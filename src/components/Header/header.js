import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { FaSignOutAlt } from 'react-icons/fa';

function Header(props) {
  const { pathname } = useLocation();

  if (pathname === '/login') {
    return '';
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <h1 onClick={() => props.setTheme()}>SWAPP</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/episodes">Episodes</Nav.Link>
          <Nav.Link href="/characters"> Characters </Nav.Link>
          <Nav.Link href="/logout">
            <FaSignOutAlt />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// import './styles.js';
import './styles.css';
function Header() {
    return (
        <header>
            <Container id="navbar" fluid>
                <Navbar expand="lg" className="container">
                    <Navbar.Brand href="#home">
                        <img src="/assets/images/logo.svg" alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="mainNavBar"/>
                    <Navbar.Collapse id="mainNavBar">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">O que eu posso fazer?</Nav.Link>
                            <Nav.Link href="#link">Alguns dos meus trabalhos</Nav.Link>
                            <Nav.Link href="#link">Contato</Nav.Link>
                            <Nav.Link href="#link"><FontAwesomeIcon icon={faWhatsapp}/> (31) 97138 - 9460</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;
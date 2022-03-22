import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-scroll';

// import './styles.js';
import './styles.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header>
            <div className="container-fluid" id="navbar">
                <div className="navbar navbar-expand-lg container">
                    <div className="navbar-brand" href="#home">
                        <a href="/"><img src="/assets/images/logo.svg" alt="logo lucas ferreira"/></a>
                    </div>
                    <a class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <FontAwesomeIcon icon={faBars}/>
                        </span>
                    </a>
                    <div class="collapse navbar-collapse" id="mainNavBar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="aboutMe"  className="nav-link">Sobre Mim?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="myServices" className="nav-link">O que eu posso fazer?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="portfolio" className="nav-link">Alguns dos meus trabalhos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" className="nav-link">Contato</Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://wa.me/5531971389460" target="_blank" className="nav-link"><FontAwesomeIcon icon={faWhatsapp}/> (31) 9 7138-9460</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
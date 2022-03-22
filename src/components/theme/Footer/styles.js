import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
const data = new Date();
var getYear = data.getFullYear();

export const Footer = () => {
    return (
        <footer className="container-fluid text-center">
            <div className="container">
                <a href='#'>
                    <img id="symbol" src="/assets/images/lucas-ferreira-simbolo.svg" />
                </a>
                <p className="mt-2">
                    Feito com &#128150; por  <strong>Lucas Ferreira &copy;</strong>  2020 - {getYear} Todos os direito reservados
                </p>
            </div>
        </footer>
    );
}


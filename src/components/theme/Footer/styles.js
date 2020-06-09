import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return(
        <footer className="container-fluid text-center">
            <div className="container">
                <img id="symbol" src="/assets/images/lucas-ferreira-simbolo.svg"/>
                <p className="mt-2">
                    Feito com &#128150; por  <strong>Lucas Ferreira &copy;</strong>  2020 - Todos os direito reservados
                </p>
            </div>
        </footer>
    );
}


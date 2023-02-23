import React from 'react';
import ReactWhatsappButton from 'react-whatsapp-button';

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
            <ReactWhatsappButton
                countryCode="55"
                phoneNumber="31971389460"
                animated
                message="Olá Lucas, estou entrando em contato através do seu website. Podemos conversar?"
            />
        </footer>
    );
}


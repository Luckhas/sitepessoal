import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import './styles';
import './styles.css';

export const Home = () => {
    // useEffect(() => {
    //     let welcomeArt = document.getElementById("welcomeArt");
    //     welcomeArt.style.backgroundSize = welcomeArt.offsetWidth + 'px';
    // }, [])

    return (
        <main className="container-fluid p-0">
            <div id="welcome" className="container row mx-auto">
                <img src="/assets/images/welcomeArt.svg" className="col order-lg-2" />
                <div className="d-flex justify-content-center align-items-center col-lg-6">
                    <div>
                        <h1>Olá, meu nome é<br /> <strong>Lucas Ferreira</strong> &#128075;</h1>
                        <p>
                            Sou um desenvolvedor <strong>full stack</strong>, também faço artes para internet além de criar conteúdo para o Youtube e outras redes sociais.
                        </p>
                        <p>
                            Possuo um grupo bem peculiar de habilidades adiquiridas ao longo da minha carreira.
                        </p>
                        <p>
                            Eu não sei o que você procura, mas acredito que eu possa te ajudar.
                        </p>
                        <div id="Typewriter">
                            <Typewriter
                                id="typewriter"
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(40).typeString('Montar o site da sua empresa')
                                    .pauseFor(2500).deleteAll(40)
                                    .typeString('Criar um blog para compartilhar suas ideias')
                                    .pauseFor(2500).deleteAll(40)
                                    .typeString('Desenvolver um sistema inovador para o mercado')
                                    .pauseFor(2500).deleteAll(40)
                                    .typeString('Uma nova identidade visual para suas redes sociais')
                                    .pauseFor(2500).deleteAll(40)
                                    .typeString('O que eu posso fazer por você hoje').changeCursor('?')
                                    .start();
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-right my-5">
                <h1>Aqui um pouquinho sobre mim!</h1>
            </div>

            <div id="mySkills" className="container-fluid">
                <div className="container p-3">
                    <div className="row">
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faAddressCard}/> Sobre mim</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat aperiam consequuntur iure. At a earum itaque! Necessitatibus, vel veritatis minima reiciendis sapiente qui aperiam reprehenderit vitae quisquam iure rerum totam itaque, tempora eius sed ex iste eum non? Sint iusto fuga ad maxime veritatis consequatur inventore. Qui, officiis sequi!</p>
                        </div>
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faAddressCard}/> Habilidades com Design</h3>
                        </div>
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faAddressCard}/> Linguagens que uso</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div id="myServices" className="container">
                <div>
                    <h1>Esses são alguns dos serviços que eu posso fazer para você!</h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col text-right">
                            <h2>Criação de Sites</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi debitis excepturi amet, asperiores ipsum. Exercitationem recusandae provident commodi vero?</p>
                        </div>
                        <FontAwesomeIcon icon={faWindowRestore} className="col-3 col-sm-5"/>
                    </div>
                    <div className="row">
                        <FontAwesomeIcon icon={faWindowRestore}  className="col-3 col-sm-5" />
                        <div className="col text-left">
                            <h2>Desenvolvimento de Sistemas</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi debitis excepturi amet, asperiores ipsum. Exercitationem recusandae provident commodi vero?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-right">
                            <h2>Implementação de Plataformas</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi debitis excepturi amet, asperiores ipsum. Exercitationem recusandae provident commodi vero?</p>
                        </div>
                        <FontAwesomeIcon icon={faWindowRestore} className="col-3 col-sm-5"/>
                    </div>
                    <div className="row">
                        <FontAwesomeIcon icon={faWindowRestore} className="col-3 col-sm-5"/>
                        <div className="col text-left">
                            <h2>Design para Redes Sociais</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi debitis excepturi amet, asperiores ipsum. Exercitationem recusandae provident commodi vero?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-right">
                            <h2>Artes para impressão</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi debitis excepturi amet, asperiores ipsum. Exercitationem recusandae provident commodi vero?</p>
                        </div>
                        <FontAwesomeIcon icon={faWindowRestore} className="col-3 col-sm-5"/>
                    </div>
                </div>
            </div>
        </main>
    );
}
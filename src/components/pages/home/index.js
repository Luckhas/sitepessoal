import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faAddressCard, faMarker, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faAdobe } from '@fortawesome/free-brands-svg-icons';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import './styles';
import './styles.css';
import { Portfolio } from '../../portfolio';

export const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleResquest(e) {
        e.preventDefault();
        api.post(
            '/mainApplication/sendMail.php',
            {
                name, email, message
            }
        ).then(response => {
            toast.success('Recebi sua mensagem, logo logo retorno ela 😉', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }).catch(error => {
            toast.warn('Ouve algum problema ao enviar sua mensagem 😢', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        });
    }

    const notify = () => toast("Wow so easy !");

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
                <div className="container p-5">
                    <div className="row">
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faAddressCard}/> Sobre mim</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat aperiam consequuntur iure. At a earum itaque! Necessitatibus, vel veritatis minima reiciendis sapiente qui aperiam reprehenderit vitae quisquam iure rerum totam itaque, tempora eius sed ex iste eum non? Sint iusto fuga ad maxime veritatis consequatur inventore. Qui, officiis sequi!</p>
                        </div>
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faMarker}/> Habilidades com Design</h3>
                            <ul>
                                <li>Criação de temas para sites, blogs & etc</li>
                                <li>Artes para impressão / Flyers, Folder, Cartões de Visita...</li>
                                <li>Identidade visual para redes sociais.</li>
                                <li className="pb-3">Artes para Redes Sociais, templates para postagens recorrentes e similares</li>
                                <h3><FontAwesomeIcon icon={faAdobe}/> Softwares que Utilizo</h3>
                                <li>Photoshop</li>
                                <li>Adobe XD</li>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faLaptopCode}/> Linguagens que uso</h3>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>SASS</li>
                                <li>Javascript</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wave">
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
            </div>

            <div id="portfolio">
                <h1 className="text-center my-5">Portfolio</h1>
                <div className="portfolioContainer">
                    <Portfolio bg="https://picsum.photos/id/237/500/500"/>
                    <Portfolio bg="https://picsum.photos/id/238/500/500"/>
                    <Portfolio bg="https://picsum.photos/id/239/500/500"/>
                </div>
            </div>

            <div id="contact" className="container text-center my-5">
                <h1 className="">Entre em Contato</h1>
                <p><a href="mailto:contato@lucas-ferreira.com">&#9993; contato@lucas-ferreira.com</a></p>

                <form onSubmit={handleResquest} className="text-left">
                    <div className="form-group">
                        <label htmlFor="formName">Nome</label>
                        <input type="text" className="form-control" id="formName" name="name" onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEmail">Email</label>
                        <input type="text" className="form-control" id="formEmail" name="email" placeholder="exemplo@gmail.com" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formMessage">Mensagem</label>
                        <textarea className="form-control" id="formMessage" name="message" rows="4" onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Enviar mensagem</button>
                </form>
            </div>
        </main>
    );
}
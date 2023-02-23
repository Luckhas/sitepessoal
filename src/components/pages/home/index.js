import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faAddressCard, faMarker, faLaptopCode, faCogs, faFileAlt, faHashtag, faImages } from '@fortawesome/free-solid-svg-icons';
import { faAdobe, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import Iframe from 'react-iframe';
import { withResizeDetector } from 'react-resize-detector';

import './styles';
import './styles.css';
import { Portfolio } from '../../portfolio';

export const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sended, setSended] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setSended(false);
        }, 15000);
        return () => clearTimeout(id);
    }, [sended]);

    function handleResquest(e) {
        e.preventDefault();
        if (sended) return;
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
            setSended(true);
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

    const [myage, setMyage] = useState(null)

    useEffect(() => {
        const birth = new Date("1993-12-30");
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birth.getFullYear();
        // let age = currentDate.getFullYear();

        const monthsDifference = currentDate.getMonth() - birth.getMonth();
        console.log(currentDate.getFullYear)

        if (monthsDifference < 0 || (monthsDifference === 0 && currentDate.getDate() < birth.getDate())) {
            age--;
        }

        setMyage(age);
    }, []);


    const [iframeHeight, setIframeHeight] = useState(0);

    function handleResize(width) {
        const aspectRatio = 0.75; // Replace with the aspect ratio of the embedded page
        setIframeHeight(width * aspectRatio);
    }

    return (
        <main className="container-fluid p-0">
            <div id="welcome" className="container row mx-auto">
                <img src="/assets/images/welcomeArt.svg" className="col mt-3 mt-lg-0 order-lg-2" />
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

            <div id="aboutMe" className="container text-right my-5">
                <h1>Aqui um pouquinho sobre mim!</h1>
            </div>

            <div id="mySkills" className="container-fluid">
                <div className="container p-5">
                    <div className="row">
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faAddressCard} /> Sobre mim</h3>
                            <p>Meu nome é Lucas Ferreira, nasci no estado de Minas Gerais e tenho {myage} anos atualmente.</p>

                            <p>Sou estudante de Engenharia de Software e atuo como encarregador de comunicação do município de Belo Vale - MG.</p>

                            <p>Faço trabalhos para desenvolvimento de sites institucionais, blog, e-commerce etc...</p>

                            <p>Mas também faço artes digitais tanto para impressão quanto para web. Se precisar de alguem para dar uma revitalizada nas suas redes sociais ou na identidade visual do seu negócio, pode contar comigo ;) </p>
                        </div>
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faMarker} /> Habilidades com Design</h3>
                            <ul>
                                <li>Criação de temas para sites, blogs & etc</li>
                                <li>Artes para impressão / Flyers, Folder, Cartões de Visita...</li>
                                <li>Identidade visual para redes sociais.</li>
                                <li className="pb-3">Artes para Redes Sociais, templates para postagens recorrentes e similares</li>
                                <h3><FontAwesomeIcon icon={faAdobe} /> Softwares que Utilizo</h3>
                                <li>Photoshop</li>
                                <li>Adobe XD</li>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3><FontAwesomeIcon icon={faLaptopCode} /> Linguagens que uso</h3>
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
                                <p>
                                    Posso criar belos sites para sua empresa ou negócio. Layouts limpos, agradaveis e resposivos para todos os tipos de tela.
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faWindowRestore} className="col-3 col-sm-5" />
                        </div>
                        <div className="row">
                            <FontAwesomeIcon icon={faCogs} className="col-3 col-sm-5" />
                            <div className="col text-left">
                                <h2>Desenvolvimento de Sistemas</h2>
                                <p>
                                    Você tem alguma ideia inovadora para o mercado, mas não sabe como tirar do papel? Ou precisa de um sistema para controlar o estoque da sua empresa?
                                </p>
                                <p>
                                    Já sei, você está querendo criar sua nova loja online mas não sabe como?
                                </p>
                                <p>
                                    Bem, posso fazer tudo isso para você!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-right">
                                <h2>Implementação de Plataformas</h2>
                                <p>
                                    Existe alguma plataforma que você queria usar, mas não sabe por onde começar a implementa-la, como usar as ferramentas e instalar os plugins necessário para seu projeto ficar redondinho?
                                </p>
                                <p>
                                    Comprou algum novo script para instalar no seu servidor, mas não tem o conhecimento para instala-la?
                                </p>
                                <p>
                                    Chama no zap que podemos dar um jeito nisso.
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faFileAlt} className="col-3 col-sm-5" />
                        </div>
                        <div className="row">
                            <FontAwesomeIcon icon={faHashtag} className="col-3 col-sm-5" />
                            <div className="col text-left">
                                <h2>Design para Redes Sociais</h2>
                                <p>
                                    Banners para canais do Youtube, Twitch e Mixer...
                                </p>
                                <p>
                                    Capas para página do Facebook, artes para postagens no Instagram e Twitter.
                                </p>
                                <p>
                                    Seja o que for, se der pra criar no Photoshop eu to lá.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-right">
                                <h2>Artes para impressão</h2>
                                <p>
                                    Tradicional design gráfico. Banners, Flyers, Folhetos, Cartões de Visitas e tudo que cerca essa área. Meu Illustrator ao seu dispor.
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faImages} className="col-3 col-sm-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <h1 className="text-center my-5">Portfolio</h1>

                <iframe
                    src="https://lucas-ferreira.com/pessoal/portfolios-2/"
                    height={iframeHeight}
                    onLoad={(event) => handleResize(event.target.clientWidth)}
                    frameBorder="0"
                    style={{width: 'calc(100% + 20px)'}}
                ></iframe>

                {/* <div className="portfolioContainer">

                    

                    <Portfolio
                        title="Baymex"
                        type="Canal Youtube"
                        url="https://www.behance.net/gallery/80706539/Arte-para-Youtube-Baymex"
                        bg="/assets/images/portfolio/baymex-small.jpg"
                    />
                    <Portfolio
                        title="Peter Jordan"
                        type="Canal Twitch"
                        url="https://www.behance.net/gallery/80706931/Painis-canal-Twitch-peterjordan"
                        bg="/assets/images/portfolio/peter-small.jpg"
                    />
                    <Portfolio
                        title="LukeraOn"
                        type="Banner para Youtube"
                        url="https://www.behance.net/gallery/91592393/Banner-canal-Lukera"
                        bg="/assets/images/portfolio/lukera-small.jpg"
                    />
                    <Portfolio
                        title="Wolf Shakkal"
                        type="Arte para Mixer"
                        url="https://www.behance.net/gallery/91592555/Arte-para-canal-na-Mixer-Wolf-Shakkal"
                        bg="/assets/images/portfolio/shakkal-small.jpg"
                    />
                    <Portfolio
                        title="Victor Kratos"
                        type="Arte para Mixer"
                        url="https://www.behance.net/gallery/91592785/Arte-para-canal-na-Mixer-Victor-Kratos"
                        bg="/assets/images/portfolio/victorkratos-small.jpg"
                    />
                    <Portfolio
                        title="Unit Web Design"
                        type="Web Site"
                        url="https://www.behance.net/gallery/34703767/Unit-WebDesign-Programacao"
                        bg="/assets/images/portfolio/1-small.jpg"
                    />
                    <Portfolio
                        title="Kodda Store"
                        type="Template Mercado Livre"
                        url="https://www.behance.net/gallery/49321801/Koddas-ML-template"
                        bg="/assets/images/portfolio/2-small.jpg"
                    />
                    <Portfolio
                        title="Template de Panfleto"
                        type="Panfleto"
                        url="https://www.behance.net/gallery/42715399/Pamphlet-template"
                        bg="/assets/images/portfolio/3-small.jpg"
                    />
                    <Portfolio
                        title="Maltarolando"
                        type="Banner para Youtube"
                        url="https://www.behance.net/gallery/35379891/Maltarolandos-new-visual-identity"
                        bg="/assets/images/portfolio/4-small.jpg"
                    />
                </div> */}
                <div className="text-center p-3">
                    <a href="https://lucas-ferreira.com/pessoal" target="_blank">&#187; Confira um pouco mais do meu Portfólio &#171;</a>
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
                        <textarea className="form-control" id="formMessage" placeholder="Escreva sua mensagem aqui" name="message" rows="4" onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Enviar mensagem</button>
                </form>
            </div>

            <div id="socialMedias">
                <a href="http://lucas-ferreira.com/instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="http://lucas-ferreira.com/youtube" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                {/* <a href="https://github.com/Luckhas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a> */}
            </div>
        </main>
    );
}
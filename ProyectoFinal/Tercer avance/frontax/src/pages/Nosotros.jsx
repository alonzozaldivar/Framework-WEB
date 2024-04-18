import React from "react";

import Header from "../complements/Header";
import Navbar from "../complements/Navbar";
import Footer from "../complements/Footer";

import edi from '../assets/images/nosotros/edi.jpeg';
import meli from '../assets/images/nosotros/meli.jpeg';
import talla from '../assets/images/nosotros/talla.jpeg';
import alonzo from '../assets/images/nosotros/alonzo.jpeg';

import mision from '../assets/iconos/mision.png';
import vision from '../assets/iconos/vision.png';
import objetivo from '../assets/iconos/objetivo.png';

export default function Nosotros() {

    return(
        <div>
            {/* Es el encabezado de la pagina*/}
            <Header />
            {/* Es el menu de navegacion de la pagina*/}
            <Navbar />
                <div className="contenido">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <img src={mision} className="foto-we" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" id="titulo-cartita">Mision</h5>
                                    <p class="card-text">En Axyz Games, nuestra misión es llevar alegría y diversión a nuestros clientes 
                                    mediante la creación y oferta de productos innovadores en el ámbito de los juegos Nos comprometemos a 
                                    proporcionar experiencias de entretenimiento excepcionales, promoviendo la conexión, la creatividad y 
                                    la emoción en cada partida.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <img src={vision} className="foto-we" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" id="titulo-cartita">Vision</h5>
                                    <p class="card-text">Nuestra visión en Axyz Games es posicionarnos como el principal proveedor de juegos 
                                    de rol y mesa en la República Mexicana y Latinoamérica. Buscamos ser reconocidos por nuestra integridad, 
                                    excelencia y compromiso con productos que superen constantemente las expectativas de nuestros clientes. 
                                    Estableceremos un estándar destacado en el mercado, redefiniendo el disfrute del entretenimiento y 
                                    construyendo relaciones duraderas basadas en la calidad y la satisfacción.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <img src={objetivo} className="foto-we" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" id="titulo-cartita">Objetivo General</h5>
                                    <p class="card-text">El objetivo general de Axyz Games es ofrecer una alternativa más accesible a los 
                                    consumidores mexicanos a través de la creación y gestión de una plataforma digital que sea tanto amigable 
                                    como profesional. Esta plataforma no solo facilitará la adquisición de productos de juegos de rol y de 
                                    mesa, sino que también servirá como un punto central para aquellos productos que, de otra manera, serían 
                                    más difíciles de conseguir en el mercado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={edi} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <br /><br />
                                            <h4 class="card-title">De La Torre Tenorio Edilberto</h4>
                                            <h7 class="card-subtitle">Director General</h7><br /><br />
                                            <p class="card-text">"Para ser franco, Axyz Games es un proyecto con una visión y escalabilidad,
                                            espero poder seguir con el hasta verlo llegar a la cima."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={meli} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <br /><br />
                                            <h4 class="card-title">Sanchez Basilio Melissa Monserrat</h4>
                                            <h7 class="card-subtitle">Developer Master</h7><br /><br />
                                            <p class="card-text">"Todo esto comenzó siendo una broma o una idea entre tantos temas de
                                            conversacion, que termino por envolvernos por completo. Estoy segura de que podemos llegar más
                                            lejos, aún si las ideas llegan a surgir de una manera tan espontánea."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={talla} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <br /><br />
                                            <h4 class="card-title">Talla Lerma Jesus Guadalupe</h4>
                                            <h7 class="card-subtitle">Modelador</h7><br /><br />
                                            <p class="card-text">"La Realidad Aumentada se ha convertido en una parte integral de mi vida diaria. Ya sea explorando nuevos lugares, descubriendo historias fascinantes o simplemente dejando volar mi imaginación. Estoy emocionado por la adaptación de RA en los productos, esperando todo lo que están por ver sea de agrado."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3" id="cartitas-we">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={alonzo} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <br /><br />
                                            <h4 class="card-title">Zaldivar Valenzuela Guillermo Alonzo</h4>
                                            <h7 class="card-subtitle">Analista</h7><br /><br />
                                            <p class="card-text">"He tenido el privilegio de seguir de cerca el ascenso de Axyz Games, 
                                            desde sus modestos comienzos hasta convertirse en un referente en el mundo de los juegos de 
                                            mesa y rol."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <br />
                </div>
            {/* Es el pie de pagina    style="max-width: 540px;"*/}
            <Footer />
        </div>
    );
}

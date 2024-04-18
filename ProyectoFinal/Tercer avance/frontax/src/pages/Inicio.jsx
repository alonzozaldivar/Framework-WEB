import React from "react";
import axios from 'axios';

// Se importan los complements
import Navbar from "../complements/Navbar";
import Footer from "../complements/Footer";
import Header from "../complements/Header";

// imagenes del carousel
import photo from '../assets/images/BannersWeb/Banner1.png';
import photo2 from '../assets/images/BannersWeb/Banner2.png';
import photo3 from '../assets/images/BannersWeb/Banner3.png';

// productos en AR
import QRUNO from '../assets/images/QRs/QR-UNO.jpeg';
import QRCHESS from '../assets/images/QRs/QR-chess.jpeg';
import QRCARDS from '../assets/images/QRs/QR-cards.jpeg';

class Inicio extends React.Component {
    state = {
        details: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8000/api/productos/')
            .then(response => {
                this.setState({
                    details: response.data
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    render() {
        const ProductChess = this.state.details.find(product => product.name === "Ajedrez de Lujo");
        const ProductUNO = this.state.details.find(product => product.name === "UNO");
        const ProductPoker = this.state.details.find(product => product.name === "Baraja de Poker");

        return(
            <div>
                {/* Es el encabezado de la pagina */}
                <Header />
                {/* Es el menu de navegacion de la pagina */}
                <Navbar />
                {/* Es el contenido principal de la pagina de inicio */}
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={photo} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={photo2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={photo3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                {/* Es el contenido de los productos con AR */}
                <div className="contenido-inicio">
                    <h1 className="titulo-cont"> PRODUCTOS CON REALIDAD AUMENTADA </h1>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            {ProductChess && (
                                <div key={ProductChess.sku} className="card" id="cartitasAR">
                                    <h4 className="card-header" id="titulo-cartita">{ProductChess.name}</h4>
                                        <img className="foto" src={`http://localhost:8000${ProductChess.imagen}`} alt="img"/>
                                    <div className="card-body row">
                                        <div className="col-md-7">
                                            <p className="card-text">{ProductChess.descripcion}</p>
                                            <p className="card-text">$ {ProductChess.precioVen} MXN</p>
                                            <a href="/tienda">Ver más...</a>
                                        </div>
                                        <div className="col-md-5" id="qr">
                                            <img src={QRCHESS} className="qr" alt="uno"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            {ProductUNO && (
                                <div key={ProductUNO.sku} className="card" id="cartitasAR">
                                    <h4 className="card-header" id="titulo-cartita">{ProductUNO.name}</h4>
                                        <img className="foto" src={`http://localhost:8000${ProductUNO.imagen}`} alt="img"/>
                                    <div className="card-body row">
                                        <div className="col-md-7">
                                            <p className="card-text">{ProductUNO.descripcion}</p>
                                            <p className="card-text">$ {ProductUNO.precioVen} MXN</p>
                                            <a href="/tienda">Ver más...</a>
                                        </div>
                                        <div className="col-md-5" id="qr">
                                            <img src={QRUNO} className="qr" alt="uno"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            {ProductPoker && (
                                <div key={ProductPoker.sku} className="card" id="cartitasAR">
                                    <h4 className="card-header" id="titulo-cartita">{ProductPoker.name}</h4>
                                        <img className="foto" src={`http://localhost:8000${ProductPoker.imagen}`} alt="img"/>
                                    <div className="card-body row">
                                        <div className="col-md-7">
                                            <p className="card-text">{ProductPoker.descripcion}</p>
                                            <p className="card-text">$ {ProductPoker.precioVen} MXN</p>
                                            <a href="/tienda">Ver más...</a>
                                        </div>
                                        <div className="col-md-5" id="qr">
                                            <img src={QRCARDS} className="qr" alt="uno"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Es el pie de pagina */}
                <Footer />
            </div>
        );
    }
};

export default Inicio;

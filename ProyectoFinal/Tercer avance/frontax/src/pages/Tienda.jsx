import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { CartContext } from "../shopcart/contexts/ShopCartContext"; // Importamos el contexto del carrito

import Header from "../complements/Header";
import Navbar from "../complements/Navbar";
import Footer from "../complements/Footer";

const Tienda = () => {
    const [cart, setCart] = useContext(CartContext);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos/')
            .then(response => {
                setDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.sku === product.sku);
        if (existingItem) {
            setCart(cart.map(item =>
                item.sku === product.sku
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="contenido-tienda">
                {details.map((product, index) => (
                    index % 4 === 0 && <div key={index} className="row mb-3">
                        {details.slice(index, index + 4).map((product, i) => (
                            <div key={i} className="col-md-3">
                                <div className="card" id="cartitas">
                                    <h4 className="card-header" id="titulo-cartita">{product.name}</h4>
                                    <img className="foto" src={`http://localhost:8000${product.imagen}`} alt="img"/>
                                    <div className="card-body">
                                        <p className="card-text">{product.descripcion}</p>
                                        <p className="card-text">$ {product.precioVen}</p>
                                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Tienda;

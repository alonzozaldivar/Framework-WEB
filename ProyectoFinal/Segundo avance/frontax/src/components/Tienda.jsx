import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Tienda(){
    return(
        <div>
            <Header />
            <Navbar />
                <div className="contenido">
                    <br />
                    <h1>Bienvenido a nuestra tienda en linea</h1>
                    <p>Aquí podras ver todo una variedad de productos!</p>
                </div>
            <Footer />
        </div>
    );
}

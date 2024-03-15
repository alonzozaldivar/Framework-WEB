import React from "react";
// Se importan los componentes
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Inicio(){
  return(
      <div>
        {/* Es el encabezado de la pagina */}
        <Header />
        {/* Es el menu de navegacion de la pagina */}
        <Navbar />
          {/* Es el contenido principal de la pagina de inicio */}
          <div className="contenido">
              <br />
              <h1>Bienvenido a nuestro sitio web</h1>
              <p>Explora todo lo que tenemos para ofrecerte!</p>
          </div>
        {/* Es el pie de pagina */}
        <Footer />
      </div>
  );
}

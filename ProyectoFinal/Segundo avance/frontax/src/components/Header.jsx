import React from "react";
// Se importan las imagenes a utilzar en este componente
import photo from '../assets/images/Logo_Sombritaxd.png';
import lupa from '../assets/iconos/lupa.png';
import usuario from '../assets/iconos/usuario.png';

export default function Header(){
  return(
    <header class="headaxyz">
        <div class="container text-center">
          <div class="row align-items-center">
            {/* La primera columna del encabezado es el logo */}
            <div class="col">
              <a href="/">
                <img class="logoaxyz" src={photo} alt="logo"/>
              </a>
            </div>
            <div class="col-6 align-self-center">
            {/* La segunda columna del encabezado es la barra de busqueda, aun no tiene funcionalidad */}
              <div class="input-group mb-3" id="barra">
                <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-axyz"/>
                  <button class="btn btn-outline-secondary" type="button" id="boton">
                    <img class="lupaxyz" src={lupa} alt="lupa"/>
                  </button>
              </div>
            </div>
            {/* La tercera columna del encabezado es para el inicio de sesion*/}
            <div class="col">
              <a href="/login">
                <img class="usuario" src={usuario} alt="logo"/>
              </a>
            </div>
          </div>
        </div>
    </header>
  );
}

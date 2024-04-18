import React from "react";
import { useAuthStore } from "../store/auth";
import { jwtDecode } from "jwt-decode";

import photo from '../assets/images/Logo_Sombritaxd.png';

import usuario from '../assets/iconos/usuario.png';
import carrito from '../assets/iconos/carrito.png';

import ShopCart from "../shopcart/ShopCart"; // Importamos el componente del carrito

export default function Header(){

  const token = useAuthStore.getState().access;
  const { isAuth } = useAuthStore();

  let is_admin;

  if(isAuth) {
  const tokenDecoded = jwtDecode(token);
  is_admin = tokenDecoded.is_staff;
  } 

  return(
    <header className="headaxyz">
      <div className="row align-items-center">
        {/* La primera columna del encabezado es el logo */}
          <div className="col-lg-4">
            <a href="/" id="lgax">
              <img className="logoaxyz" src={photo} alt="logo"/>
            </a>
          </div>
        {/* La segunda columna del encabezado es la barra de busqueda, aun no tiene funcionalidad */}
          <div className="col-lg-4">
            {/* <div className="input-group">
              <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-axyz"/>
              <button className="btn btn-outline-secondary" type="button" id="boton">
                <img className="lupaxyz" src={lupa} alt="lupa"/>
              </button>
            </div> */}
          </div>
        {/* La tercera columna del encabezado es para el inicio de sesion y el carro de compras*/}
        <div className="col-lg-4">
          {isAuth ? ( // --------------- Si el usuario inicio sesion se mostrara lo siguiente ---------------
            <div className="d-flex align-items-center">
              {/* Imagen del carrito */}
              <div className="dropdown">
                <a role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img id="car" src={carrito} alt="carrito"/>
                </a>
                <ul className="dropdown-menu">
                  <li><ShopCart /> </li>
                </ul>
              </div>
              {/* Imagen del usuario */}
              <div className="dropdown">
                <a role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img id="log" src={usuario} alt="user"/>
                </a>
                <ul className="dropdown-menu">
                  <li></li>
                  <li><a className="dropdown-item" href="/logout">Cerrar Sesión</a></li>
                </ul>
              </div>
            </div>
          ) : ( // --------------- Si el usuario no inicio sesion se mostrara lo siguiente ---------------
            <div className="d-flex align-items-center">
              {/* Imagen del carrito */}
              <a id="carrito">
                <img id="car" src={carrito} alt="carrito"/>
              </a>
              {/* Imagen del usuario */}
              <div className="dropdown">
                <a role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img id="log" src={usuario} alt="user"/>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/login">Iniciar Sesión</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

import React from "react";

export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg" id="navaxyz">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" id="li-axyz">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tienda" id="li-axyz">Tienda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="li-axyz">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="li-axyz">Ubicacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="axyz">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

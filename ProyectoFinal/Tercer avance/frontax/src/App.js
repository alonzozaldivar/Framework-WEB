import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopCartProvider } from './shopcart/contexts/ShopCartContext';

// Se importan los componentes  desde su respectiva carpeta de origen.
import Inicio from './pages/Inicio';
import Tienda from './pages/Tienda';
import Nosotros from './pages/Nosotros';

import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

export default function App() {
  return(
    <ShopCartProvider>
      {/* Router es el contenedor raiz para las rutas de aplicacion */}
      <Router>
          {/* Routes es el componente contenedor de las rutas*/}
          <Routes>
            {/* Cada Route define una ruta especifica junto al componente que debe renderizarse cuando la ruta coincide con la URL actual */}
            <Route path="/" element={<Inicio />} />
            <Route path="/tienda" element={<Tienda />}/>
            <Route path="/nosotros" element={<Nosotros />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
    </Router>
    </ShopCartProvider>
  );
}

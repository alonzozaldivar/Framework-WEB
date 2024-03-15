import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Se importan los componentes  desde su respectiva carpeta de origen.
import Inicio from './components/Inicio';
import Tienda from './components/Tienda';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return(
    <Router>
      {/* Router es el contenedor raiz para las rutas de aplicacion */}
      <div>
        {/* Routes es el componente contenedor de las rutas*/}
        <Routes>
          {/* Cada Route define una ruta especifica junto al componente que debe renderizarse cuando la ruta coincide con la URL actual */}
          <Route path="/" element={<Inicio />} />
          <Route path="/tienda" element={<Tienda />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

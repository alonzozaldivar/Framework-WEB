import React, { useState } from "react";
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/registro/', { username, password });
            console.log(response.data);
        } catch (error) {
            setError('Error al registrar');
            console.error('Error al registrar', error);
        }
    };

    // Cambia la ubicacion actual del navegador a la ruta '/login'
    const handleReturnLogin = () => {
        window.location.href = '/login'; // window: es la ventana donde se esta actualmente
    } // location: es una propiedad que proporciona informacion sobre una URL, href: contiene la URL completa 

    return (
        <div className="register-cont">
            <form className="reg-form" onSubmit={handleRegister}>
                <h2 className="reg-title">Registrarse</h2>
                {error && <p class="p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">{error}</p>}
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* boton para realizar el registro */}
                <button type="submit">Registrarse</button>
                {/* boton para regresar a la página de login */}
                <button onClick={handleReturnLogin}>Regresar</button>
            </form>
        </div>
    );
}

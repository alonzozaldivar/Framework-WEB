// useState permite definir variables de estado en componentes de funcion
import React, { useState } from "react";
// Funciona para realizar solicitudes HTTP
import axios from 'axios';

export default function Login() {
    // Se almacena el valor actual de los campos usuario y contraseña.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Mientras que error almacena los mensajes de error en caso de que algo falle en el inicio de sesion.
    const [error, setError] = useState('');

    // Se encarga del envio del formulario.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Se realiza la solicitud POST a la API de inicio de sesion.
            const response = await axios.post('/api/login/', { username, password });
            console.log(response.data); // Imprime los datos de respuesta en la consola
        } catch (error) {
            // Administra los errores anteponiendo el estado de error y mostrando asi un mensaje de error.
            setError('Usuario y contraseña invalidos');
            console.error('Error al iniciar sesion:', error); // Imprime los fallos que se hayn generado en la consola
        }
    };

    // Cambia la ubicacion actual del navegador a la ruta '/register'
    const handleRegister = () => {
        // window: es la ventana donde se esta actualmente
        window.location.href = '/register';
    } // location: es una propiedad que proporciona informacion sobre una URL, href: contiene la URL completa 

    // Cambia la ubicacion actual del navegador a la ruta '/'
    const handleReturnWebSite = () => {
        // window: es la ventana donde se esta actualmente
        window.location.href = '/';
    } // location: es una propiedad que proporciona informacion sobre una URL, href: contiene la URL completa 

    // Retorna el formulario de inicio de sesion.
    return (
        <div className="login-contenido">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Welcome!</h2>
                    {/* Esta linea muestra el mensaje de error si es que hay un error */}
                    {error && <p class="p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">{error}</p>}
                {/* Ambos campos input, son las entradas para ingresar un usuario y contraseña */}
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* El boton es el encargado de enviar el formulario */}
                <button type="submit">Login</button>
                <p>¿No tienes una cuenta?<br /><button onClick={handleRegister}>Registrate aquí</button></p>
                {/* boton para regresar a la página de login */}
                <button onClick={handleReturnWebSite}>Regresar</button>
            </form>
        </div>
    );
}

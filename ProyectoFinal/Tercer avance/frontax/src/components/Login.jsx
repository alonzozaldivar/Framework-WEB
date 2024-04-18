import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { loginRequest } from "../api/users";
import { useAuthStore } from "../store/auth";

import back from '../assets/iconos/back.png';
import usuario from '../assets/iconos/usuario.png';

export default function Login() {

    const navigate = useNavigate();
    const { isAuth } = useAuthStore();
    const setToken = useAuthStore((state) => state.setToken);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginMutation = useMutation({
        mutationFn: () => loginRequest(email, password),
        onSuccess: (response) => {
            setToken(response.data.access, response.data.refresh)
            toast.success("Inicio de sesion exitoso!")
            navigate("/")
        },
        onError: () => {
            toast.error("Hubo un error, intenta nuevamente")
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        loginMutation.mutate()
    }

    if (loginMutation.isLoading) return <p>Loading...</p>
    if (isAuth) return (<Navigate to="/" />)

    return(
        <div className="log-reg-cont">
            <form className="log-reg-form" id="texto" onSubmit={handleSubmit}>
                <a href="/" id="volver">
                    <img src={back} alt="volver"/>
                </a>
                    <img id="log-usuario" src={usuario} alt="logo"/>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} 
                        type="email" name="email" placeholder="name@company.com"/>
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password" name="password" placeholder="••••••••" />
                </div>
                <button type="submit"> Iniciar Sesion </button>
                    <p id="pregunta" > ¿No tienes una cuenta? <a href="/register" id="login"> Registrarse </a> </p>
            </form>
        </div>
    );
}

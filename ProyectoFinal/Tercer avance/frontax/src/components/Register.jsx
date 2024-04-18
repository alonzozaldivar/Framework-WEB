import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { registerRequest } from "../api/users";
import { useAuthStore } from "../store/auth";

import usuario from '../assets/iconos/usuario.png';

export default function Register() {

    const navigate = useNavigate();
    const { isAuth } = useAuthStore();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");

    const registerMutation = useMutation({
        mutationFn: () => registerRequest(email, name, last_name, password),
        onSuccess: () => {
            toast.success("Registro exitoso!")
            navigate("/login")
        },
        onError: () => {
            toast.error("Hubo un error, intenta nuevamente")
        }
    })

    const handleMatch = () => {
        if (password !== re_password) {
            return false
        } else {
            return true
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== re_password) {
            toast.error("Las contraseñas deben coincidir")
        } else {
            registerMutation.mutate()
        }
    }

    if (registerMutation.isLoading) return <p>Loading...</p>
    if (isAuth) return (<Navigate to="/" />)

    return(
        <div className="log-reg-cont">
            <form className="log-reg-form" id="texto" onSubmit={handleSubmit}>
                    <img id="reg-usuario" src={usuario} alt="logo"/>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} 
                        type="email" name="email" placeholder="name@company.com"/>
                </div>
                <div>
                    <label htmlFor="name"> Your username </label>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                        type="name" name="name" placeholder="name"/>
                </div>
                <div>
                    <label htmlFor="last_name"> Your lastname </label>
                    <input value={last_name} onChange={(e) => setLastName(e.target.value)}
                        type="name" name="last_name" placeholder="lastname"/>
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password" name="password" placeholder="••••••••" />
                </div>
                <div>
                    <label htmlFor="re-password"> Confirm Password </label>
                    <input value={re_password} onChange={(e) => setRePassword(e.target.value)}
                        type="password" name="re-password" placeholder="••••••••" />
                </div>
                    {handleMatch() ? false : <p>Las contraseñas deben coincidir</p>}
                <button type="submit"> Registrarse </button>
                    <p id="pregunta" > ¿Ya tienes una cuenta? <a href="/login" id="login"> Iniciar Sesion </a> </p>
            </form>
        </div>
    );
}

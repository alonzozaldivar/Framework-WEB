import { useAuthStore } from "../store/auth";

export default function Header(){

    function logOutFun() {
        useAuthStore.getState().logout();
        window.location.href = '/login';
    }

    return (
        <div className="log-reg-cont">
            <div className="log-reg-form">
                <p id="texto">¿Estas seguro que quieres cerrar sesion?</p>
                <button onClick={logOutFun}> Confirmar </button>
            </div>
        </div>
    )
}

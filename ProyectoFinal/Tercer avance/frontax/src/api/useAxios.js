import axios from "axios";
import { useAuthStore } from "../store/auth";
import { jwtDecode } from "jwt-decode";

function logout () {
    useAuthStore.getState().logout()
    window.location.href = '/login'
}

const baseURL = "http://localhost:8000/";

export const axi = axios.create({
    baseURL
});

export const authAxios = axios.create({
    baseURL,
    withCredentials: true
});

authAxios.interceptors.request.use(async (config) => {
    const token = useAuthStore.getState().access;

    config.headers = {
        Authorization: `Bearer ${token}`,
    }

    const tokenDecoded = jwtDecode(token);

    const expiration = new Date(tokenDecoded.exp * 1000);
    const now = new Date();
    const fiveMin = 1000 * 60 * 5;

    if (expiration.getTime() - now.getTime() < fiveMin) {
        try {
            const response = axi.post('/users/refresh/', { refresh: useAuthStore.getState().refresh });
            useAuthStore.getState().setToken(response.data.access, response.data.refresh);
        } catch (err) {
            logout();
        }
    }
    return config
});

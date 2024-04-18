import { axi } from "./useAxios";

export const registerRequest = async (email, name, last_name, password) => {
    await axi.post("/users/register/", { email, name, last_name, password })
};

export const loginRequest = async (email, password) => {
    const response = await axi.post("/users/login/", { email, password })
    return response;
};

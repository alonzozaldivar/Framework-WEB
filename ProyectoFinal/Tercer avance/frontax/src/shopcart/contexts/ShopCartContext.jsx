import React, { createContext, useState } from "react";

export const CartContext = createContext(); // No es necesario establecer un valor inicial aquí

export const ShopCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

import React, { useContext } from "react";
import { CartContext } from "./contexts/ShopCartContext";

const ShopCart = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.precioVen,
        0
    );

    const removeFromCart = (sku) => {
        const updatedCart = cart.filter(item => item.sku !== sku);
        setCart(updatedCart);
    };

    return (
        <div className="cart-container">
            <div>
                <div>Items in cart: {quantity}</div>
                <div>Total: ${totalPrice}</div>
                
                <div>
                    <h2>Cart Items:</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - Quantity: {item.quantity}
                                <button onClick={() => removeFromCart(item.sku)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;

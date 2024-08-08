import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            console.log("Está la reserva");

            const updatedCart = cart.map((prod) =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            );
            console.log("Cantidad", quantity);
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const totalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador += item.quantity, 0)
    }

    const sumProducts = () => {
        return cart.reduce((acumulador, item) => acumulador += item.quantity * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalProductos, sumProducts}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

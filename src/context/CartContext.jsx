import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }
    const addItem = (productoToAdd) => {
        if(!isInCart(productoToAdd.id)){
            setCart((prev)=> [...prev, productoToAdd])
        }else {
            console.log("El producto ya esta en el carrito")
        }
    }
    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod)=> prod.id !== id)
        setCart(cartUpdated)
    } 
    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        let acc = 0;
        cart.forEach((item)=>{
            acc += item.quantity * item.price
        })
        return acc
    }
    const getTotalQuantity = () => {
        let acc = 0;
        cart.forEach((produ)=>{
            acc += produ.quantity
        })
        return acc
    }
    //const totalQuantity = getTotalQuantity()
    const totalQuantity = getTotalQuantity


    const obj = {
        cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalQuantity
    }
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
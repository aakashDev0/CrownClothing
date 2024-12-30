import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) =>{
//if cart item exist
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
)
//if cartItem aleready exist
if(existingCartItem){
    return cartItems.map((cartItem)=>
        cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
}

//if new cart item 
return [...cartItems, {...productToAdd, quantity: 1}]
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);
    const[cartTotal, setCartTotal] = useState(0);

    

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    },[cartItems])
    useEffect(()=> {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    },[cartItems])
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
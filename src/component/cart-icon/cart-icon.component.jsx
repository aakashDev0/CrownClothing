import "./cart-icon.styles.scss";
import { FaCartShopping } from "react-icons/fa6";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CartIcon = () =>{

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className="cart-icon" onClick={toggleIsCartOpen}>
        <FaCartShopping  className="shopping-icon"/>
        <span className="item-count">0</span>
        </div>
    )
}
export default CartIcon;
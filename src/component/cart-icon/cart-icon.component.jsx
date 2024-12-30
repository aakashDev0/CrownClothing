import "./cart-icon.styles.scss";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CartIcon = () =>{

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className="cart-icon" onClick={toggleIsCartOpen}>
        <HiOutlineShoppingBag  className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
        </div>
    )
}
export default CartIcon;
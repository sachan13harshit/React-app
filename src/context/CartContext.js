import {  createContext } from "react";
import Cart from "../components/Cart/Cart";

// {} curly bracket means name export

const CartContext = createContext({
    cart : {},
    increaseQuantity : () => {},
    decreaseQuantity : () => {}
});
export default CartContext;
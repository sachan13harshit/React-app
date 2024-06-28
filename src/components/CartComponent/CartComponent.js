import React from "react";
import { useSelector } from "react-redux";

function CartComponent() {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    return (
        <div>
            <h2>Cart</h2>
            {Object.keys(cartItems).map((item) => {
              return (  <div >
                    <h2> Id : {cartItems[item].id}</h2>
                    <h2> Name : {cartItems[item].title}</h2>
                    <h2>Quantity: {cartItems[item].quantity}</h2>
                </div>
    )    })}
        </div>
    );
}
export default CartComponent;
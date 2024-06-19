function Cart({ cart, IncreaseQuantity, DecreaseQuantity }) {
    return (
        <div>
            <button onClick={() => IncreaseQuantity()}>Add To Cart</button>
            <button onClick={() => IncreaseQuantity()}>+</button>
            <button onClick={() => DecreaseQuantity()}>-</button>
        </div>
    );
}

export default Cart;
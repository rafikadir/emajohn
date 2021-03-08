import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total < 1) {
        shipping = 0;
    }
    else if ( total > 1 && total < 50) {
        shipping = 10;
    }
    else if (total>50) {
        shipping = 0
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    return (
        <div>
            <h3>Cart Summery</h3>
            <p>Items Orderd: {cart.length}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            <Link to="/review">
                <button className="product-btn">Review Order</button>
            </Link>            
        </div>
    );
};

export default Cart;
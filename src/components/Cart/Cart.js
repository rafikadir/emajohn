import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
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
        </div>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItems/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart,setCart] = useState([]);

    const removeProduct = (productkey) =>{
        const newCart = cart.filter(pd =>pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey)
    }

    useEffect (()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map (key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])

    return (
        <div className="shop-container">
            <div className="product-conatiner">
                <h1>Cart Items:{cart.length}</h1>
                {
                    cart.map (pd => <ReviewItem product= {pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;
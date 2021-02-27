import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProduct] = useState(firstTen);

    return (
        <div className="shop-container">
            <div className="product-conatiner">
               {
                   products.map(product => <Product product={product}></Product>)
               }
            </div>
            <div className="cart-container">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Shop;
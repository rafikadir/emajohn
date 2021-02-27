import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="product image"/>
            </div>
            <div>
                <h4 className="prductName">{name}</h4><br/>
                <p className="seller">by: <small>{seller}</small></p>
                <h4>${price}</h4>
                <h6>Only {stock} is left.</h6>
                <button onClick={() => props.handleAddProduct(props.product)} className="product-btn"><FontAwesomeIcon className="icon" icon={faShoppingCart}/>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
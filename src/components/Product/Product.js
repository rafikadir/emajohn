import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="product image"/>
            </div>
            <div>
                <h4 className="prductName"><Link to={"/product/"+key}>{name}</Link></h4><br/>
                <p className="seller">by: <small>{seller}</small></p>
                <h4>${price}</h4>
                <h6>Only {stock} is left.</h6>
                { props.showCart &&
                    <button onClick={() => props.handleAddProduct(props.product)} className="product-btn"><FontAwesomeIcon className="icon" icon={faShoppingCart}/>Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;
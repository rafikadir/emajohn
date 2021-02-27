import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="prductName">{name}</h4><br/>
                <p className="seller">by: <small>{seller}</small></p>
                <h4>${price}</h4>
                <h6>Only {stock} is left.</h6>
            </div>
        </div>
    );
};

export default Product;
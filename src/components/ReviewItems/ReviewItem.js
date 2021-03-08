import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity,key,price} = props.product;
    return (
        <div>
            <h5>{name}</h5>
            <p>Quantity:{quantity}</p>
            <p>Price:{price}</p>
            <button onClick={()=> props.removeProduct(key)} className="product-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;
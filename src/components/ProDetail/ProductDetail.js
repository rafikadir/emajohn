import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    console.log(product);

    return (
        <div>
            <h1>{productKey} Details loading</h1>
            <Product showCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
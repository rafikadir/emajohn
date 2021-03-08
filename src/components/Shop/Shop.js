import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProduct] = useState(firstTen);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const prevCart = productKeys.map(pdkey => {
            const product = fakeData.find(pd =>pd.key === pdkey);
           product.quantity = savedCart[pdkey];
           return product;
        })
        setCart(prevCart);
    },[])

    const handleAddProduct = (product) => {
        const tobeAddedes = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd =>pd.key !== tobeAddedes);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart= [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className="shop-container">
            <div className="product-conatiner">
                {
                    products.map(product => <Product 
                        showCart={true} 
                        handleAddProduct={handleAddProduct} 
                        product={product}
                        key = {product.key}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
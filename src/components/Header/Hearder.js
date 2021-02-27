import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Hearder = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/manage">Manage Order</a>
            </nav>
        </div>
    );
};

export default Hearder;
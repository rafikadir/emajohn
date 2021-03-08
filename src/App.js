import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Hearder';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Not from './components/Not/Not';
import {BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import ProductDetail from './components/ProDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path ="/">
            <Shop />
          </Route>
          <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <Not />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;

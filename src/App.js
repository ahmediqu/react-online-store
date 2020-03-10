import React , { Fragment } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import { Manager, Reference, Popper } from 'react-popper';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';


import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
 <Router>
    <Fragment>
      <Navbar />
      {/* <Cart />
      <Product />
      <ProductList />
      <Details />
      <Default /> */}
        <Route path="/" exact component={ ProductList }/>

      <section className="container">
        <Switch>
          <Route exact path="/product" component={ Product } />
          <Route exact path="/details" component={ Details } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact  component={ Default } />
        </Switch>
      </section>
      
    </Fragment>
  </Router>
);

export default App;

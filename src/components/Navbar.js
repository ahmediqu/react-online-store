import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <a className="navbar-brand" href="#">Online Store</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
       
        <Link to="/shop" className="nav-link">Shop</Link>
      </li>
      <li className="nav-item">
      <Link to="/cart" className="nav-link">Cart</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</nav>
        );
    }
}
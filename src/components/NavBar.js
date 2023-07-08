import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/products">PRODUCT</Link></li>
        <li><Link to="/basket">BASKET</Link></li>
        <li><Link to="/checkout">CHECKOUT</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

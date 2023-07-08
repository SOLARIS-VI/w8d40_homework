import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductContainer from './containers/ProductContainer';
import ProductDetail from './components/ProductDetail';
import BasketContainer from './containers/BasketContainer';
import Checkout from './components/Checkout';
import HomePage from './components/HomePage'; // Add this line

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductContainer} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/basket" component={BasketContainer} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

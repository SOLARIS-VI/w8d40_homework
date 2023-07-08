import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductContainer from './containers/ProductContainer';
import ProductDetail from './components/ProductDetail';
import BasketContainer from './containers/BasketContainer';
import Checkout from './components/Checkout';
import HomePage from './components/HomePage';

const App = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleBuy = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleClearArtwork = () => {
    setSelectedArtwork(null);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products">
            <ProductContainer onBuy={handleBuy} /> {/* Pass onBuy prop */}
          </Route>
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/basket">
            <BasketContainer
              selectedArtwork={selectedArtwork}
              onClearArtwork={handleClearArtwork}
            />
          </Route>
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

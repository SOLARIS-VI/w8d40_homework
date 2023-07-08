import React from 'react';
import ArtWorks from './ArtWorks';
import { useHistory } from 'react-router-dom'; // Import useHistory

const ProductList = () => {
  const history = useHistory(); // Create a history object

  const handleBuy = (artwork) => {
    // Handle buy button click
    history.push({
      pathname: '/basket',
      state: { artwork }, // Pass the selected artwork as state
    });
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {ArtWorks.map((artwork) => (
          <li key={artwork.id}>
            <h2>{artwork.title}</h2>
            <img src={`./images/${artwork.image}`} alt={artwork.title} />
            <p>Price: £{artwork.price}</p>
            <button onClick={() => handleBuy(artwork)}>Buy</button> {/* Add onClick handler */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

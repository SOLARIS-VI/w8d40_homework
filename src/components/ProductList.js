import React from 'react';
import { useHistory } from 'react-router-dom';
import ArtWorks from './ArtWorks';
import useBasket from '../hooks/useBasket'; 

const ProductList = ({ onBuy }) => {
  const history = useHistory();
  const { addItem } = useBasket();

  const handleBuyClick = (product) => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1  
    };

    addItem(item);
    onBuy(product);
    history.push('/basket');
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
            <button onClick={() => handleBuyClick(artwork)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

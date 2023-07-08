import React from 'react';
import { useBasket } from '../hooks/useBasket';

const Basket = () => {
  const { basket, removeItem, updateQuantity } = useBasket();

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  return (
    <div>
      <h1>Basket</h1>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleRemoveItem(product.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;

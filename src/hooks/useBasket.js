import { useState } from 'react';

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const addItem = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeItem = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.filter((product) => product.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  return {
    basket,
    addItem,
    removeItem,
    updateQuantity,
  };
};

export default useBasket;

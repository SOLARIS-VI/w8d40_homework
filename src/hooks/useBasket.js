import { useState } from 'react';

const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const addItem = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const removeItem = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return { basket, addItem, removeItem, updateQuantity, clearBasket };
};

export default useBasket;

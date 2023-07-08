import React from 'react';
import ProductList from '../components/ProductList';

const ProductContainer = ({ onBuy }) => {
  return <ProductList onBuy={onBuy} />; // Pass onBuy prop to ProductList
};

export default ProductContainer;

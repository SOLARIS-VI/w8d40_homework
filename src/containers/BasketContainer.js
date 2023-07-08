import React from 'react';
import Basket from '../components/Basket';

const BasketContainer = ({ selectedArtwork, onClearArtwork }) => { // Receive selectedArtwork and onClearArtwork props
  return <Basket selectedArtwork={selectedArtwork} onClearArtwork={onClearArtwork} />;
};

export default BasketContainer;

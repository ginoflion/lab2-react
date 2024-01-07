import React from 'react';
import './Item.css';

const Item = ({ isVisible, onAddToInventory }) => {
  const handleClick = () => {
    if (onAddToInventory) {
      onAddToInventory();
    }
  };

  return (
    <div className={`quadrado ${isVisible ? 'visible' : 'hidden'}`} onClick={handleClick}>
    </div>
  );
};

export default Item;

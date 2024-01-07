
import React from 'react';


const Item = ({ isVisible, onAddToInventory }) => {
  const handleClick = () => {
    if (onAddToInventory) {
      onAddToInventory();
    }
  };

  const itemStyle = {
    width: '100%', 
    height: '100%', 
    display: isVisible ? 'flex' : 'none',
    justifyContent: 'center',  
    alignItems: 'center',     
  };

  return (
    <img
      className="item"
      src={isVisible ? 'apple.png' : ''}
      alt="Item"
      style={itemStyle}
      onClick={handleClick}
    />
  );
};

export default Item;

import React from 'react';

const ItemCard = ({ item, onSelect, onDelete }) => {
  return (
    <div className="item-card">
      <h2>{item.name}</h2>
      <button onClick={() => onSelect(item)}>View Details</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

export default ItemCard;

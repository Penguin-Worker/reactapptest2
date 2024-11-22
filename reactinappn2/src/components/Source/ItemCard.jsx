import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item, onSelect, onToggleSelect, onDelete, isSelected }) => {
  return (
    <div
      className={`ItemCard ${isSelected ? 'selected' : ''}`}
      onClick={onToggleSelect} // Выделение по клику
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f0f8ff' : '#fff', // Подсветка
      }}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={(e) => { e.stopPropagation(); onSelect(); }}>
        Подробнее
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
      >
        Удалить
      </button>
    </div>
  );
};

export default ItemCard;

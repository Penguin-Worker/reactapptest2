import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item, onSelect, onEdit, onToggleSelect, onDelete, isSelected }) => {
  return (
    <div
      className="ItemCard"
      onClick={onToggleSelect}
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f0f8ff' : '#fff',
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
          onEdit(); // Открытие модального окна для редактирования
        }}
      >
        
        Удалить
      </button>
    </div>
  );
};

export default ItemCard;

import React, { useState, useEffect } from 'react';

const ItemForm = ({ item, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onSubmit) {
      const updatedItem = {
        ...item, 
        name, 
        description,
      };
      
      onSubmit(updatedItem); // Отправляем обновленный объект
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Описание:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">{item ? 'Сохранить' : 'Добавить'}</button>
    </form>
  );
};

export default ItemForm;

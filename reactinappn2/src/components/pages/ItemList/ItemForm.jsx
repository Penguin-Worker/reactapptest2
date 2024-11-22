import React, { useState } from 'react';

const ItemForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onSubmit({ name, description }); // Передача данных в родительский компонент
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;

import React, { useState, useEffect } from 'react';
import { Button, Snackbar } from '@mui/material';
const ItemForm = ({ item, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
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
      setOpenSnackbar(true);
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
      <Button type="submit" variant="contained" color="primary">
        {item ? 'Сохранить' : 'Добавить'}
        </Button>
        <Snackbar
        
        open={openSnackbar}
        message="Изменения сохранены!"
        autoHideDuration={3000} // Автоматически скрывается через 3 секунды
        onClose={() => setOpenSnackbar(false)} // Закрытие уведомления
      />
    </form>
    
  );
};

export default ItemForm;

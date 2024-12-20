import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ItemForm from '../pages/ItemList/ItemForm'; // Форма редактирования элемента

const Modal = ({ item, onClose, onSubmit }) => {
  if (!item) return null;

  return (
    <Dialog open={!!item} onClose={onClose}>
      <DialogTitle>Редактировать элемент</DialogTitle>
      <DialogContent>
        {/* Передаем item и onSubmit в форму */}
        <ItemForm item={item} onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

import React from 'react';
import './Modal.css';
import ItemForm from '../pages/ItemList/ItemForm'; // Предположим, что форма редактирования элемента в этом компоненте

const Modal = ({ item, onClose, onSubmit }) => {
  if (!item) return null;

  return (
    <div className="ModalBackdrop" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <h2>Редактировать элемент</h2>

        {/* Передаем item и onSubmit в форму */}
        <ItemForm item={item} onSubmit={onSubmit} />

        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;

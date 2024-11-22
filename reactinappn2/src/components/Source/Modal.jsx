import React from 'react';
import './Modal.css';

const Modal = ({ item, onClose }) => {
  return (
    <div className="ModalBackdrop" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

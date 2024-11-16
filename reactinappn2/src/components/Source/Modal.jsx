import React from 'react';

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

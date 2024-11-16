import React, { useState, useEffect } from 'react';
import items from '../../data/items.json';
import ItemCard from '../../Source/ItemCard'; 
import Modal from '../../Source/Modal';
import ItemForm from './ItemForm';

const ItemsList = () => {
  const [items, setItems] = useState([]); // Состояние для списка элементов
  const [selectedItem, setSelectedItem] = useState(null); // Состояние для выбранного элемента (открытие в модальном окне)

  // Загрузка данных из JSON-файла
  useEffect(() => {
    setItems(items);
  }, []);

  // Функция добавления нового элемента
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  // Функция удаления элемента
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Items List</h1>
      
      {/* Форма для добавления нового элемента */}
      <ItemForm onSubmit={addItem} />
      
      {/* Карточки элементов */}
      {items.map(item => (
        <ItemCard 
          key={item.id} 
          item={item} 
          onSelect={setSelectedItem} 
          onDelete={deleteItem} 
        />
      ))}
      
      {/* Модальное окно для отображения подробной информации */}
      {selectedItem && (
        <Modal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default ItemsList;

import React, { useState } from 'react';
import itemsData from '../../data/items.json'; // Базовые данные
import ItemCard from '../../Source/ItemCard';
import Modal from '../../Source/Modal';
import ItemForm from './ItemForm';
import './ItemList.css';
import { useSelector, useDispatch } from 'react-redux';

const ItemsList = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]); // Состояние выбранных элементов
  const [editingItem, setEditingItem] = useState(null); // Для редактирования

  // Функция добавления нового элемента
  const addItem = (newItem) => {
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    const updatedItem = { ...newItem, id: newId };
    setItems([...items, updatedItem]);
  };

  // Функция удаления элемента
  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setSelectedItem(null); // Закрытие модального окна после удаления
  };

  // Функция переключения выделения элемента
  const toggleSelectItem = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id)); // Убираем ID из списка
    } else {
      setSelectedIds([...selectedIds, id]); // Добавляем ID в список
    }
  };

  // Функция сохранения изменений
  const saveItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditingItem(null); // Закрытие модального окна после сохранения
  };

  return (
    <div className="items-list" >
      <h1>Items List Basic(add/delete/update)</h1>

      <ItemForm onSubmit={addItem} />

      {/* Карточки элементов */}
      <div className="items-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelect={() => setSelectedItem(item)}
            onDelete={() => deleteItem(item.id)}
            onEdit={() => setEditingItem(item)} 
            isSelected={selectedIds.includes(item.id)} 
            onToggleSelect={() => toggleSelectItem(item.id)}
          />
        ))}
      </div>

     {/* Модальное окно*/}
     {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={() => setSelectedItem(null)} 
          onSubmit={saveItem} // Передаем функцию сохранения
        />
      )}
    </div>
  );
};

export default ItemsList;

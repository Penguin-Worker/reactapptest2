import React, { useState, useEffect } from 'react';
import itemsData from '../../data/items.json'; // Базоввые данных
import ItemCard from '../../Source/ItemCard'; 
import Modal from '../../Source/Modal';
import ItemForm from './ItemForm';
import './ItemList.css';
const ItemsList = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]); // Состояние для ID выбранных элементов

  // Функция добавления нового элемента
  const addItem = (newItem) => {
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    const updatedItem = { ...newItem, id: newId };
    setItems([...items, updatedItem]);
  };

  // Функция удаления элемента
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id)); // Убираем ID из выбранных
  };

  // Функция переключения выделения элемента
  const toggleSelectItem = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id)); // Убираем ID из списка
    } else {
      setSelectedIds([...selectedIds, id]); // Добавляем ID в список
    }
  };

  return (
    <div>
      <h1>Items List</h1>

      {/* Форма для добавления нового элемента */}
      <ItemForm onSubmit={addItem} />

      {/* Карточки элементов */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelect={() => setSelectedItem(item)}
            onToggleSelect={() => toggleSelectItem(item.id)} // Добавляем возможность выделения
            onDelete={deleteItem}
            isSelected={selectedIds.includes(item.id)} // Передаем статус выделения
          />
        ))}
      </div>

      {/* Модальное окно */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default ItemsList;
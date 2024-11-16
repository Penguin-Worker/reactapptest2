
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css'; // Импорт стилей

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/items">Items</Link>
    </nav>
  );
};

export default Navigation;

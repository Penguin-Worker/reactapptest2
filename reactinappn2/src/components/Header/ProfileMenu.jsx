import React, { useState } from 'react';
import './Header.css';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ProfileMenu">
      <button onClick={toggleMenu}>Profile</button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li>My Profile</li>
          <li>Settings</li>
          <li>Log out</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;


import React from 'react';
import Navigation from './Navigation';
import ProfileMenu from './ProfileMenu';
import './Header.css'; 

const Header = () => {
  return (
    <header className="Header">
      <Navigation />
      <ProfileMenu />
    </header>
  );
};

export default Header;


import React from 'react';
import Navigation from './Navigation';
import ProfileMenu from './ProfileMenu';
import './Header.css'; 

const Header = () => {
  return (
    <Header className="Header">
      <Navigation />
      <ProfileMenu />
    </Header>
  );
};

export default Header;

import React, { useState } from 'react';
import Search from './Search';
import RightNavbar from './RightNavbar';
import '../styles/Navbar.css';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="menuCon">
        <div className="search">
          <Search />
        </div>
        <div className="rightMenu">
          <RightNavbar />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <RightNavbar />
        </Drawer>
      </div>
    </nav>
  );
}

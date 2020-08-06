import React, { useState } from 'react';
import Search from './Search';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.jpg';

import { Menu, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

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
      <div className="subMenu">
        <div className="search">
          <Search />
        </div>
        <div className="rightMenu">
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/register" className="register">
                Đăng ký
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login" className="login">
                Đăng nhập
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <Button className="barsMenu" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title={
            <Link to="/" onClick={onClose}>
              <img
                src={logo1}
                alt="logo"
                style={{ width: '150px', height: '80px' }}
              />
            </Link>
          }
          placement="left"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical">
            <Menu.Item>
              <Link to="/register" className="register" onClick={onClose}>
                Đăng ký
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login" className="login" onClick={onClose}>
                Đăng nhập
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
}

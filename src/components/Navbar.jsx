import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.jpg';

import { Menu, Drawer, Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import Search from '../components/Search';
import { CaretDownOutlined } from '@ant-design/icons';

import '../styles/Navbar.css';

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentToken, setCurrentToken] = useState(undefined);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    const token = AuthService.getToken();
    if (token) {
      setCurrentToken(token);
    }
    console.log(token);
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <p>Đặt chỗ của tôi</p>
      </Menu.Item>
      <Menu.Item key="2">
        <p>Tin nhắn</p>
      </Menu.Item>
      <Menu.Item key="3">
        <p>Cài đặt tài khoản</p>
      </Menu.Item>
      <Menu.Item key="4">
        <p>Yêu thích</p>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/" className="logout" onClick={logOut}>
          LogOut
        </Link>
      </Menu.Item>
    </Menu>
  );

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
        {currentToken ? (
          <div className="user-info">
            <Dropdown overlay={menu} trigger={['click']}>
              <span
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {currentUser.firstName} {currentUser.lastName}
                <CaretDownOutlined />
              </span>
            </Dropdown>
          </div>
        ) : (
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
        )}

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

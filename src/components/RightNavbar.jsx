import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/RightNavbar.css';

export default function RightNavbar() {
  return (
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
  );
}

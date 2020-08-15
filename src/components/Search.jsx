import React, { useState } from 'react';
import { Input, Dropdown, Button, Menu } from 'antd';
import '../styles/Search.css';
import {
  UserOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

export default function Search() {
  const [guest, setGuest] = useState(0);
  const menu = (
    <Menu className="drop">
      <span className="drop-title">Người lớn</span>
      <div className="increment">
        {guest > 0 ? (
          <MinusCircleOutlined
            className="minus"
            onClick={() => setGuest(guest - 1)}
          />
        ) : (
          <MinusCircleOutlined className="disabled-button minus" disabled />
        )}
        <span className="guest-num">{guest}</span>
        <PlusCircleOutlined
          className="plus"
          onClick={() => setGuest(guest + 1)}
        />
      </div>
      <div>
        <button className="delete" onClick={() => setGuest(0)}>
          Xóa
        </button>
      </div>
    </Menu>
  );
  return (
    <div>
      <Input.Group compact className="group">
        <Input
          className="input-search"
          style={{ width: '60%', textAlign: 'left' }}
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
        />
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
          <Button
            className="guest"
            style={{ width: '25%' }}
            icon={<UserOutlined />}
          >
            {guest > 0 ? <span>{guest} khách</span> : <span>Số khách</span>}
          </Button>
        </Dropdown>
      </Input.Group>
    </div>
  );
}

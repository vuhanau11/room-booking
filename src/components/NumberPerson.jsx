import React, { useState, useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Dropdown, Button, Menu } from 'antd';
import {
  UserOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import '../styles/NumberPerson.css';

export default function NumberPerson() {
  const room = useContext(RoomContext);
  const [guest, setGuest] = useState(1);
  const menu = (
    <Menu className="drop">
      <span className="drop-title">Người lớn</span>
      <div className="increment">
        {guest > 1 ? (
          <MinusCircleOutlined
            className="minus"
            onClick={() => setGuest(guest - 1)}
          />
        ) : (
          <MinusCircleOutlined className="disabled-button minus" disabled />
        )}
        {guest < room.maximum_guests ? (
          <>
            <span className="guest-num">{guest}</span>
            <PlusCircleOutlined
              className="plus"
              onClick={() => setGuest(guest + 1)}
            />
          </>
        ) : (
          <>
            <span className="guest-num">{guest}</span>
            <PlusCircleOutlined className="disabled-button minus" disabled />
          </>
        )}
      </div>
      <div>
        <button className="delete" onClick={() => setGuest(1)}>
          Xóa
        </button>
      </div>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
      <Button
        className="guest"
        style={{ width: '100%', textAlign: 'left' }}
        icon={<UserOutlined />}
      >
        {guest > 0 ? <span>{guest} khách</span> : <span>Số khách</span>}
      </Button>
    </Dropdown>
  );
}

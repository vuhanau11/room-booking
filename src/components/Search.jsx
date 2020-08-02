import React, { useState } from 'react';
import { Input, DatePicker, Dropdown, Button, Menu } from 'antd';
import '../styles/Search.css';

export default function Search() {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [baby, setBaby] = useState(0);
  // const countGuest = adult + children;
  const menu = (
    <Menu>
      <Menu.Item>
        <span className="title">Người lớn</span>
        <div className="increment">
          {adult > 0 ? (
            <button onClick={() => setAdult(adult - 1)}>-</button>
          ) : (
            <button className="disabled" disabled>
              -
            </button>
          )}
          <span>{adult}</span>
          <button onClick={() => setAdult(adult + 1)}>+</button>
        </div>
      </Menu.Item>
      <Menu.Item>
        <span className="title">Trẻ em</span>
        <div className="increment">
          {children > 0 ? (
            <button onClick={() => setChildren(children - 1)}>-</button>
          ) : (
            <button className="disabled" disabled>
              -
            </button>
          )}
          <span>{children}</span>
          <button onClick={() => setChildren(children + 1)}>+</button>
        </div>
      </Menu.Item>
      <Menu.Item>
        <span className="title">Trẻ sơ sinh</span>
        <div className="increment">
          {baby > 0 ? (
            <button onClick={() => setBaby(baby - 1)}>-</button>
          ) : (
            <button className="disabled" disabled>
              -
            </button>
          )}
          <span>{baby}</span>
          <button onClick={() => setBaby(baby + 1)}>+</button>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {/* <Search
          placeholder="Tìm kiếm"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        /> */}
      <Input.Group compact className="group">
        <Input
          className="search"
          style={{ width: '40%', textAlign: 'left' }}
          placeholder="Tìm kiếm"
        />
        <DatePicker.RangePicker
          className="datepicker"
          style={{ width: '35%' }}
        />
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
          <Button className="guest" style={{ width: '25%' }}>
            Số khách
          </Button>
        </Dropdown>
      </Input.Group>
    </div>
  );
}

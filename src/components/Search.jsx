import React from 'react';
import { Input, DatePicker } from 'antd';

export default function Search() {
  return (
    <div>
      {/* <Search
          placeholder="Tìm kiếm"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        /> */}
      <Input.Group compact className="group">
        <Input style={{ width: '30%' }} defaultValue="input content" />
        <DatePicker.RangePicker style={{ width: '50%' }} />
      </Input.Group>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Service from '../services/ApiService';

import '../styles/Search.css';

export default function Search() {
  const history = useHistory();
  const { Search } = Input;
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    Service.getAllRooms()
      .then((res) => {
        const { data } = res;
        const listSearch = data.map((index) => ({
          value: index.name,
          key: index.id,
        }));
        setSearchList(listSearch);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onSelect = (key) => {
    history.push(`/rooms/${key}`);
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 450 }}
      className="input-search group"
      options={searchList}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={(value, option) => {
        onSelect(option.key);
      }}
    >
      <Search
        size="large"
        placeholder="Tìm kiếm"
        prefix={<SearchOutlined />}
        allowClear
      />
    </AutoComplete>
  );
}

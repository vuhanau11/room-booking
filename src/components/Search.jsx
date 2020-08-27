import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Service from '../services/ApiService';

import '../styles/Search.css';

export default function Search() {
  const history = useHistory();
  const { Search } = Input;
  const [listRooms, setListRooms] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    Service.getAllRooms()
      .then((res) => {
        const { data } = res;
        const listSearch = data.map((index) => ({
          value: index.name,
          key: index.id,
        }));
        setListRooms(listSearch);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const onSearch = (value) => {
    history.push(`/search?name=${value}`);
  };

  const onSelect = (key) => {
    history.push(`/rooms/${key}`);
  };

  const onSearchOptions = (value) => {
    if (value) {
      const list = listRooms.filter((index) => {
        return index.value.toUpperCase().search(value.toUpperCase()) !== -1;
      });
      setOptions(list);
    } else {
      setOptions([]);
    }
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 450 }}
      className="input-search group"
      options={options}
      onSearch={(value) => onSearchOptions(value)}
      onSelect={(value, option) => {
        onSelect(option.key);
      }}
    >
      <Search
        size="large"
        placeholder="Tìm kiếm"
        prefix={<SearchOutlined />}
        allowClear
        onSearch={(value) => onSearch(value)}
      />
    </AutoComplete>
  );
}

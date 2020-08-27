import React from 'react';
import { Pagination } from 'antd';
import '../styles/Pagination.css';

export default function Paginations(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRow } = pagination;

  function onChange(page) {
    handlePageChange(page);
  }

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <div className="pagination">
      <Pagination
        size="small"
        pageSize={_limit}
        defaultCurrent={_page}
        total={_totalRow}
        onChange={onChange}
      />
    </div>
  );
}

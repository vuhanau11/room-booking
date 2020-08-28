import React from 'react';
import { Spin, Empty } from 'antd';
import '../styles/Loading.css';

export default function Loading() {
  return (
    <div>
      <Spin size="large">
        <Empty />
      </Spin>
    </div>
  );
}

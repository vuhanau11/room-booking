import React from 'react'
import { Spin } from 'antd'
import '../styles/Loading.css'

export default function Loading() {
  return <Spin className="spin" size="large"></Spin>
}

import React from 'react'
import { Row, Col } from 'antd'
import avatar from '../assets/avarta.jpg'
import Map from './Map'
import RoomDescription from './RoomDescription'
import RoomPrice from './RoomPrice'
import RoomRule from './RoomRule'

export default function RoomDetailContent({ roomInfo }) {
  const location = {
    lat: roomInfo.lat,
    lng: roomInfo.lng,
  }
  return (
    <Col md={16} xs={24} className="room-detail-left">
      <Row>
        <Col md={20} xs={24}>
          <h1>{roomInfo.name}</h1>
        </Col>
        <Col md={4} xs={24}>
          <img src={avatar} alt="avatar" className="avatar" />
        </Col>
      </Row>
      <RoomDescription roomDes={roomInfo} />
      <RoomPrice roomPrice={roomInfo} />
      <div className="rule-title">
        <h3>Nội quy và chính sách về chỗ ở</h3>
      </div>
      <RoomRule roomRule={roomInfo} />
      <Map location={location} zoomLevel={16} />
    </Col>
  )
}

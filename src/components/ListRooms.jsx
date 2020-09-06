import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Rate } from 'antd';

export default function ListRooms({ listRooms }) {
  const numberFormat = new Intl.NumberFormat();
  return (
    <Col md={5} xs={24} className="listRooms-col">
      <Link to={`/rooms/${listRooms.id}`}>
        <div className="listRooms-image">
          <img alt="rooms" src={listRooms.imgUrl} />
        </div>
      </Link>
      <div className="listRooms-name">
        <p className="room-type">{listRooms.category}</p>
        <Link to={`/rooms/${listRooms.id}`}>
          <h3>{listRooms.name}</h3>
        </Link>
        <p>{listRooms.size}</p>
        <p className="room-price">
          {numberFormat.format(listRooms.price)}
          <u>đ</u>/đêm
        </p>
        <p>{listRooms.address}</p>
        <span>
          <Rate allowHalf defaultValue={listRooms.rating} disabled />
          {listRooms.review_count}
        </span>
      </div>
    </Col>
  );
}

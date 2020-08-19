import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import Navbar from '../components/Navbar';

import { Row, Col, Rate } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/Rooms.css';
import 'antd/dist/antd.css';

export default function Rooms(props) {
  const [cityId, setCityId] = useState({});
  const [rooms, setRooms] = useState([]);
  const numberFormat = new Intl.NumberFormat();

  const getCityId = (cityId) => {
    Service.getCityById(cityId)
      .then((res) => {
        setCityId(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getRooms = (roomId) => {
    Service.getRooms(roomId)
      .then((res) => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCityId(props.match.params.id);
    getRooms(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="room-content">
          <h2>
            {cityId.num} homestay tại {cityId.title}
          </h2>
          <div className="listRooms">
            <Row>
              {rooms.map((data) => (
                <Col key={data.id} md={5} xs={24} className="listRooms-col">
                  <Link to={`/rooms/${data.id}`}>
                    <div className="listRooms-image">
                      <img alt="rooms" src={data.imgUrl} />
                    </div>
                  </Link>
                  <div className="listRooms-name">
                    <p className="room-type">{data.category}</p>
                    <Link to={`/rooms/${data.id}`}>
                      <h3>{data.name}</h3>
                    </Link>
                    <p>{data.size}</p>
                    <p className="room-price">
                      {numberFormat.format(data.price)}
                      <u>đ</u>/đêm
                    </p>
                    <p>{data.address}</p>
                    <span>
                      <Rate allowHalf defaultValue={data.rating} disabled />
                      {data.review_count}
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

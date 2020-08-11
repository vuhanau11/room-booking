import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/Rooms.css';

export default function Rooms(props) {
  console.log(props);
  const [rooms, setRooms] = useState({});
  const getCityId = (id) => {
    Service.getCityById(id)
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
  }, [props.match.params.id]);

  function showroom(rooms) {
    if (rooms.id !== undefined) {
      return (
        <div className="listRooms">
          <Row>
            {rooms.rooms.map((data) => (
              <Col key={data.id} md={5} xs={24} className="listRooms-col">
                <Link to={`/rooms/${data.id}`}>
                  <div className="listRooms-image">
                    <img alt="rooms" src={data.imgUrl} />
                  </div>
                  <div className="listRooms-name">
                    <p>{data.size}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      );
    }
  }

  return (
    <div className="body">
      <div className="title">
        <h2>
          {rooms.num} homestay tại {rooms.title}
        </h2>
        {showroom(rooms)}
      </div>
    </div>
  );
}

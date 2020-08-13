import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/Rooms.css';

export default function Rooms(props) {
  const [cityId, setCityId] = useState({});
  const [rooms, setRooms] = useState([]);

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
    <div className="body">
      <div className="title">
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
                  <div className="listRooms-name">
                    <p>{data.name}</p>
                    <p>Gia: {data.price}</p>
                    <p>{data.size}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

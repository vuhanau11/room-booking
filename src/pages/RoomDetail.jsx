import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import { Row, Col } from 'antd';

export default function RoomDetail(props) {
  console.log(props);
  const [roomDetail, setRoomDetail] = useState({});
  const getRoomId = (id) => {
    Service.getRoomById(id)
      .then((res) => {
        setRoomDetail(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getRoomId(props.match.params.id);
  }, [props.match.params.id]);

  function showroom(roomDetail) {
    if (roomDetail.id !== undefined) {
      return (
        <div className="listRooms">
          <Row>
            {roomDetail.rooms.map((data) => (
              <Col key={data.id} md={5} xs={24} className="listRooms-col">
                <div className="listRooms-image">
                  <img alt="rooms" src={data.imgUrl} />
                </div>
                <div className="listRooms-name">
                  <p>{data.size}</p>
                </div>
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
          {roomDetail.num} homestay tại {roomDetail.title}
        </h2>
        {showroom(roomDetail)}
      </div>
    </div>
  );
}

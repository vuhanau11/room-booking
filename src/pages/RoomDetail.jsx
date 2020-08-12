import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import { Row, Col } from 'antd';

export default function RoomDetail(props) {
  const [roomDetail, setRoomDetail] = useState({});
  const [listImage, setListImage] = useState([]);

  const getRoomId = (roomId) => {
    Service.getRoomById(roomId)
      .then((res) => {
        setRoomDetail(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getListImage = (imageId) => {
    Service.getListImage(imageId)
      .then((res) => {
        setListImage(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRoomId(props.match.params.id);
    getListImage(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="body">
      <div className="title">
        <img src={roomDetail.imgUrl} alt="img" />
        <h2>{roomDetail.name}</h2>
        <p>Dia chi: {roomDetail.address}</p>
        <p>Gia: {roomDetail.price}</p>
        <div dangerouslySetInnerHTML={{ __html: roomDetail.detail }} />
      </div>
      <div className="listImage">
        <Row>
          {listImage.map((data) => (
            <Col key={data.id} md={5} xs={24} className="listRooms-col">
              <div className="listRooms-image">
                <img alt="rooms" src={data.Url} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

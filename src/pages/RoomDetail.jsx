import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import Slider from 'react-slick';
import { options } from '../models/lightBox';
import { SRLWrapper } from 'simple-react-lightbox';
import { settingLightBox } from '../models/settingSlickLightBox';
import { Row, Col } from 'antd';
import avatar from '../assets/avarta.jpg';
import 'font-awesome/css/font-awesome.css';
import '../styles/RoomDetail.css';

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
    <div className="room-detail">
      <div className="light-box">
        <SRLWrapper options={options}>
          {!listImage ? (
            <span>Loading...</span>
          ) : (
            <Slider {...settingLightBox} className="slider-light-box">
              {listImage.map((data) => (
                <div key={data.id} className="listRooms-image">
                  <img alt="rooms" src={data.Url} />
                </div>
              ))}
            </Slider>
          )}
        </SRLWrapper>
      </div>
      <div className="room-detail-body">
        <Row>
          <Col md={16} xs={24} className="room-detail-left">
            <Row>
              <Col md={20} xs={24}>
                <h1>{roomDetail.name}</h1>
              </Col>
              <Col md={4} xs={24}>
                <img src={avatar} alt="avatar" className="avatar" />
              </Col>
            </Row>
            <div className="info">
              <i className="fa fa-map-marker"></i>
              <span>{roomDetail.address}</span>
            </div>
            <div className="info">
              <i className="fa fa-building"></i>
              <span>
                {roomDetail.category} · {roomDetail.area}m<sup>2</sup>
              </span>
            </div>
            <div className="size">{roomDetail.size}</div>
            <div
              className="detail"
              dangerouslySetInnerHTML={{ __html: roomDetail.detail }}
            />
          </Col>
          <Col md={8} xs={24} className="room-detail-right"></Col>
        </Row>
      </div>
    </div>
  );
}

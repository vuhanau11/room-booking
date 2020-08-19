import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import { RoomContext } from '../context/RoomContext';
import avatar from '../assets/avarta.jpg';

export default function RoomDetailContent() {
  const numberFormat = new Intl.NumberFormat();
  const roomDetail = useContext(RoomContext);
  return (
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
      <div className="size">
        {roomDetail.roomType} · {roomDetail.size_detail} · {roomDetail.guests}{' '}
        khách (tối đa {roomDetail.maximum_guests} khách)
      </div>
      <div
        className="detail"
        dangerouslySetInnerHTML={{ __html: roomDetail.detail }}
      />
      <div className="price">
        <div className="price-title">
          <h3>Giá phòng</h3>
          <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
        </div>
        <div className="room-price">
          <div className="is-flex">
            <span className="flex-title">Thứ hai - Thứ năm</span>
            <span className="flex-number">
              {numberFormat.format(roomDetail.price)}
              <u>đ</u>
            </span>
          </div>
          <div className="is-flex">
            <span className="flex-title">Thứ sáu - Chủ nhật</span>
            <span className="flex-number">
              {numberFormat.format(roomDetail.weekend_price)}
              <u>đ</u>
            </span>
          </div>
          <div className="is-flex">
            <span className="flex-title">Phí khách tăng thêm</span>
            <span className="flex-number">
              {numberFormat.format(roomDetail.additional_guests)}
              <u>đ</u> (sau {roomDetail.guests} khách)
            </span>
          </div>
          <div className="is-flex">
            <span className="flex-title">Số đêm tối thiểu</span>
            <span className="flex-number">{roomDetail.minimum_stay} đêm</span>
          </div>
          <div className="is-flex">
            <span className="flex-title">Số đêm tối đa</span>
            <span className="flex-number">{roomDetail.maximum_stay} đêm</span>
          </div>
        </div>
      </div>
      <div className="rule-title">
        <h3>Nội quy và chính sách về chỗ ở</h3>
      </div>
      <h4 className="mt--24">Lưu ý đặc biệt</h4>
      <div
        className="rule-content"
        dangerouslySetInnerHTML={{ __html: roomDetail.rule }}
      />
      <h4 className="mt--24">Thời gian nhận phòng</h4>
      <div className="room-price check-in">
        <div className="is-flex">
          <span className="flex-title">Nhận phòng</span>
          <span className="flex-number">{roomDetail.checkin_time}</span>
        </div>
        <div className="is-flex">
          <span className="flex-title">Trả phòng</span>
          <span className="flex-number">{roomDetail.checkout_time}</span>
        </div>
      </div>
    </Col>
  );
}

import React from 'react';
import { Row, Col, Input } from 'antd';

export default function CheckoutInfo(props) {
  const { guest, date, roomDetail, fromDateString, toDateString } = props;
  return (
    <>
      <div className="checkout-title">
        <h3>Thông tin đặt chỗ</h3>
      </div>
      <div className="space-loose">
        <div className="input-group">
          <label className="input-group-label">
            <span className="text-danger">*</span>Số khách
          </label>
          <Row>
            <Col md={11}>
              <Input
                className="input input-checkout"
                defaultValue={`${guest} khách`}
                disabled
              />
            </Col>
          </Row>
        </div>
        <div className="input-group">
          <label className="input-group-label">{`${date} đêm tại ${roomDetail.name}`}</label>
          <Row>
            <Col className="date-in" md={12} xs={12}>
              <div className="is-shadow-box rounded">
                <hr className="is-green is-decorate"></hr>
                <p className="gray">Nhận phòng</p>
                <p className="date-book">{fromDateString}</p>
              </div>
            </Col>
            <Col className="date-out" md={12} xs={12}>
              <div className="is-shadow-box rounded">
                <hr className="is-yellow is-decorate"></hr>
                <p className="gray">Trả phòng</p>
                <p className="date-book">{toDateString}</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="input-group">
          <h3 className="input-group-label">Trách nhiệm vật chất</h3>
          <span className="input-group-text">
            Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại
            chỗ ở trong thời gian lưu trú.
          </span>
        </div>
        <div className="input-group">
          <h3 className="input-group-label">Nội quy chỗ ở</h3>
          <div
            className="input-group-text"
            dangerouslySetInnerHTML={{
              __html: roomDetail.rule,
            }}
          />
        </div>
      </div>
    </>
  );
}

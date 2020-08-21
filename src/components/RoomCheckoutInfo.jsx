import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

export default function RoomCheckoutInfo(props) {
  console.log(props);
  return (
    <>
      <div className="checkout-title">
        <h3>Chi tiết đặt phòng</h3>
      </div>
      <div className="checkup">
        <div className="checkup-header">
          <Link to={`/rooms/${props.roomDetail.id}`} className="link is-flex">
            <div className="grow">
              <h4 className="checkup-title">{props.roomDetail.name}</h4>
              <div className="checkup-address">
                <i className="fa fa-map-marker"></i>
                <span>{props.roomDetail.address}</span>
              </div>
            </div>
            <div className="image-room" style={{ width: '128px' }}>
              <img src={props.roomDetail.imgUrl} alt="img" />
            </div>
          </Link>
        </div>
        <div className="checkup-body">
          <div className="checkup-detail">
            <div className="is-flex">
              <i className="fa fa-calendar"></i>
              <span>
                <b>{props.date} đêm</b> · {props.fromDateString} -{' '}
                {props.toDateString}
              </span>
            </div>
            <div className="is-flex">
              <i className="fa fa-user"></i>
              <span>
                <b>{props.guest} người lớn</b>
              </span>
            </div>
          </div>
          <div className="checkup-price">
            <div className="is-flex">
              <span className="pr-6">Giá thuê {props.date} đêm</span>
              <span className="right">
                {props.totalPriceWithoutAddGuest}
                <u>đ</u>
              </span>
            </div>
            {props.guest > props.roomDetail.guests ? (
              <div className="is-flex">
                <span className="pr-6">Phí khách tăng thêm</span>
                <span className="right">
                  {props.additionalGuests}
                  <u>đ</u>
                </span>
              </div>
            ) : null}
            <hr className="my-18" />
            {props.guest > props.roomDetail.guests ? (
              <div className="is-flex">
                <span className="pr-6 bold">Tổng tiền</span>
                <span className="right bold">
                  {props.totalPrice}
                  <u>đ</u>
                </span>
              </div>
            ) : (
              <div className="is-flex">
                <span className="pr-6 bold">Tổng tiền</span>
                <span className="right bold">
                  {props.totalPriceWithoutAddGuest}
                  <u>đ</u>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

export default function RoomCheckoutInfo(props) {
  console.log(props);
  const {
    additionalGuests,
    date,
    fromDateString,
    guest,
    roomDetail,
    toDateString,
    totalPrice,
    totalPriceWithoutAddGuest,
  } = props;
  return (
    <>
      <div className="checkout-title">
        <h3>Chi tiết đặt phòng</h3>
      </div>
      <div className="checkup">
        <div className="checkup-header">
          <Link to={`/rooms/${roomDetail.id}`} className="link is-flex">
            <div className="grow">
              <h4 className="checkup-title">{roomDetail.name}</h4>
              <div className="checkup-address">
                <i className="fa fa-map-marker"></i>
                <span>{roomDetail.address}</span>
              </div>
            </div>
            <div className="image-room" style={{ width: '128px' }}>
              <img src={roomDetail.imgUrl} alt="img" />
            </div>
          </Link>
        </div>
        <div className="checkup-body">
          <div className="checkup-detail">
            <div className="is-flex">
              <i className="fa fa-calendar"></i>
              <span>
                <b>{date} đêm</b> · {fromDateString} - {toDateString}
              </span>
            </div>
            <div className="is-flex">
              <i className="fa fa-user"></i>
              <span>
                <b>{guest} người lớn</b>
              </span>
            </div>
          </div>
          <div className="checkup-price">
            <div className="is-flex">
              <span className="pr-6">Giá thuê {date} đêm</span>
              <span className="right">
                {totalPriceWithoutAddGuest}
                <u>đ</u>
              </span>
            </div>
            {guest > roomDetail.guests ? (
              <div className="is-flex">
                <span className="pr-6">Phí khách tăng thêm</span>
                <span className="right">
                  {additionalGuests}
                  <u>đ</u>
                </span>
              </div>
            ) : null}
            <hr className="my-18" />
            {guest > roomDetail.guests ? (
              <div className="is-flex">
                <span className="pr-6 bold">Tổng tiền</span>
                <span className="right bold">
                  {totalPrice}
                  <u>đ</u>
                </span>
              </div>
            ) : (
              <div className="is-flex">
                <span className="pr-6 bold">Tổng tiền</span>
                <span className="right bold">
                  {totalPriceWithoutAddGuest}
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

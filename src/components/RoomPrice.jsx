import React from 'react'

export default function RoomPrice({ roomPrice }) {
  const numberFormat = new Intl.NumberFormat()
  return (
    <div className="price">
      <div className="price-title">
        <h3>Giá phòng</h3>
        <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
      </div>
      <div className="room-price">
        <div className="is-flex">
          <span className="flex-title">Thứ hai - Thứ năm</span>
          <span className="flex-number">
            {numberFormat.format(roomPrice.price)}
            <u>đ</u>
          </span>
        </div>
        <div className="is-flex">
          <span className="flex-title">Thứ sáu - Chủ nhật</span>
          <span className="flex-number">
            {numberFormat.format(roomPrice.weekend_price)}
            <u>đ</u>
          </span>
        </div>
        <div className="is-flex">
          <span className="flex-title">Phí khách tăng thêm</span>
          <span className="flex-number">
            {numberFormat.format(roomPrice.additional_guests)}
            <u>đ</u> (sau {roomPrice.guests} khách)
          </span>
        </div>
        <div className="is-flex">
          <span className="flex-title">Số đêm tối thiểu</span>
          <span className="flex-number">{roomPrice.minimum_stay} đêm</span>
        </div>
        <div className="is-flex">
          <span className="flex-title">Số đêm tối đa</span>
          <span className="flex-number">{roomPrice.maximum_stay} đêm</span>
        </div>
      </div>
    </div>
  )
}

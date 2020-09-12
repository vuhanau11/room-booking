import React from 'react'

export default function RoomRule({ roomRule }) {
  return (
    <>
      <h4 className="mt--24">Lưu ý đặc biệt</h4>
      <div
        className="rule-content"
        dangerouslySetInnerHTML={{ __html: roomRule.rule }}
      />
      <h4 className="mt--24">Thời gian nhận phòng</h4>
      <div className="room-price check-in">
        <div className="is-flex">
          <span className="flex-title">Nhận phòng</span>
          <span className="flex-number">{roomRule.checkin_time}</span>
        </div>
        <div className="is-flex">
          <span className="flex-title">Trả phòng</span>
          <span className="flex-number">{roomRule.checkout_time}</span>
        </div>
      </div>
    </>
  )
}

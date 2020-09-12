import React from 'react'

export default function RoomDescription({ roomDes }) {
  return (
    <>
      <div className="info">
        <i className="fa fa-map-marker"></i>
        <span>{roomDes.address}</span>
      </div>
      <div className="info">
        <i className="fa fa-building"></i>
        <span>
          {roomDes.category} · {roomDes.area}m<sup>2</sup>
        </span>
      </div>
      <div className="size">
        {roomDes.roomType} · {roomDes.size_detail} · {roomDes.guests} khách (tối
        đa {roomDes.maximum_guests} khách)
      </div>
      <div
        className="detail"
        dangerouslySetInnerHTML={{ __html: roomDes.detail }}
      />
    </>
  )
}

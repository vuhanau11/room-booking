import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';

export default function RoomDetail(props) {
  const [roomDetail, setRoomDetail] = useState({});
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
  useEffect(() => {
    getRoomId(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="body">
      <div className="title">
        <img src={roomDetail.imgUrl} alt="" />
        <h2>
          {roomDetail.id} homestay tại {roomDetail.area}
        </h2>
      </div>
    </div>
  );
}

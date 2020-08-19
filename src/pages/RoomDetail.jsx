import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import dayjs from 'dayjs';
import Slider from 'react-slick';
import { options } from '../models/lightBox';
import { SRLWrapper } from 'simple-react-lightbox';
import { settingLightBox } from '../models/settingSlickLightBox';
import { Row, Col, DatePicker, Menu, Dropdown, Button } from 'antd';
import {
  UserOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import { RoomProvider } from '../context/RoomContext';

import 'font-awesome/css/font-awesome.css';
import '../styles/RoomDetail.css';

import Service from '../services/ApiService';
import RoomDetailContent from '../components/RoomDetailContent';

export default function RoomDetail(props) {
  const [roomDetail, setRoomDetail] = useState({});
  const [listImage, setListImage] = useState([]);
  const [dateRange, setDateRange] = useState({ fromDate: null, toDate: null });
  const [date, setDate] = useState();
  const [currentGuest, setCurrentGuest] = useState(1);
  const numberFormat = new Intl.NumberFormat();

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

  const onChange = (value) => {
    if (value) {
      setDateRange({ fromDate: value[0], toDate: value[1] });
      console.log(value);
      setDate((value[1] - value[0]) / (1000 * 60 * 60 * 24));
    }
  };

  function disabledDate(current) {
    return current && current < dayjs().endOf('day');
  }

  const menu = (
    <Menu className="drop">
      <span className="drop-title">Người lớn</span>
      <div className="increment">
        {currentGuest > 1 ? (
          <MinusCircleOutlined
            className="minus"
            onClick={() => setCurrentGuest(currentGuest - 1)}
          />
        ) : (
          <MinusCircleOutlined className="disabled-button minus" disabled />
        )}
        {currentGuest < roomDetail.maximum_guests ? (
          <>
            <span className="guest-num">{currentGuest}</span>
            <PlusCircleOutlined
              className="plus"
              onClick={() => setCurrentGuest(currentGuest + 1)}
            />
          </>
        ) : (
          <>
            <span className="guest-num">{currentGuest}</span>
            <PlusCircleOutlined className="disabled-button minus" disabled />
          </>
        )}
      </div>
      <div>
        <button className="delete" onClick={() => setCurrentGuest(1)}>
          Xóa
        </button>
      </div>
    </Menu>
  );

  return (
    <RoomProvider value={roomDetail}>
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
            <RoomDetailContent />
            <Col md={8} xs={24} className="room-detail-right">
              <div className="room-sidebar">
                <div className="room-sidebar-content">
                  <div className="room-sidebar-pricing">
                    {date ? (
                      <span className="bold">
                        {currentGuest > roomDetail.guests ? (
                          <>
                            {numberFormat.format(
                              roomDetail.price * date +
                                roomDetail.additional_guests
                            )}
                          </>
                        ) : (
                          <>{numberFormat.format(roomDetail.price * date)}</>
                        )}
                        <u>đ</u>
                      </span>
                    ) : (
                      <span className="bold">
                        {numberFormat.format(roomDetail.price)}
                        <u>đ</u>
                      </span>
                    )}
                    <span className="small"> /{date} đêm</span>
                  </div>
                  <DatePicker.RangePicker
                    value={[dateRange.fromDate, dateRange.toDate]}
                    size="large"
                    disabledDate={disabledDate}
                    placeholder={['dd/mm/yyyy', 'dd/mm/yyyy']}
                    format="DD/MM/YYYY"
                    className="datepicker"
                    style={{ width: '100%' }}
                    onChange={onChange}
                  />
                  <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button
                      className="guest"
                      style={{ width: '100%', textAlign: 'left' }}
                      icon={<UserOutlined />}
                    >
                      {currentGuest > 0 ? (
                        <span>{currentGuest} khách</span>
                      ) : (
                        <span>Số khách</span>
                      )}
                    </Button>
                  </Dropdown>
                  {date ? (
                    <div className="room-sidebar-detail">
                      <div className="is-flex">
                        <span className="flex-title">Giá thuê {date} đêm</span>
                        <span className="flex-price">
                          {numberFormat.format(roomDetail.price * date)}
                          <u>đ</u>
                        </span>
                      </div>
                      {currentGuest > roomDetail.guests ? (
                        <div className="is-flex">
                          <span className="flex-title">
                            Phí khách tăng thêm
                          </span>
                          <span className="flex-price">
                            {numberFormat.format(roomDetail.additional_guests)}
                            <u>đ</u>
                          </span>
                        </div>
                      ) : null}
                      <hr style={{ margin: '10px 0' }} />
                      <div className="is-flex">
                        <span className="flex-title count">Tổng tiền</span>
                        <span className="flex-price count">
                          {currentGuest > roomDetail.guests ? (
                            <>
                              {numberFormat.format(
                                roomDetail.price * date +
                                  roomDetail.additional_guests
                              )}
                            </>
                          ) : (
                            <>{numberFormat.format(roomDetail.price * date)}</>
                          )}
                          <u>đ</u>
                        </span>
                      </div>
                    </div>
                  ) : null}
                  {/* <p>
                    {dateRange &&
                      dateRange.fromDate &&
                      dateRange.fromDate.format('DD/MM/YYYY')}
                  </p>
                  <p>
                    {dateRange &&
                      dateRange.toDate &&
                      dateRange.toDate.format('DD/MM/YYYY')}
                  </p> */}
                  {date ? (
                    <button type="button" className="book-room">
                      Đặt ngay
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="book-room disabled-button"
                      disabled
                    >
                      Đặt ngay
                    </button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </RoomProvider>
  );
}

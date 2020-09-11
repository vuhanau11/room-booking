import React from 'react'
import coin from '../assets/coin.jpg'
import top from '../assets/top.jpg'
import money from '../assets/money.jpg'
import bag from '../assets/bag.jpg'

import { Row, Col } from 'antd'

import '../styles/RegisScreen.css'

export default function RegisScreen() {
  return (
    <div>
      <Row>
        <Col className="colRegis" md={12} xs={24}>
          <div className="media">
            <img src={coin} alt="coin" width="65px" height="70px" />
            <h3>Tích điểm nhanh chóng</h3>
            <p>
              Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành Lux
              Credit để du lịch nhiều hơn nữa.
            </p>
          </div>
        </Col>
        <Col className="colRegis" md={12} xs={24}>
          <div className="media">
            <img src={top} alt="top" width="65px" height="70px" />
            <h3>Tiện ích thông minh</h3>
            <p>
              Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối
              mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="colRegis" md={12} xs={24}>
          <div className="media">
            <img src={money} alt="money" width="65px" height="70px" />
            <h3>Thanh toán đơn giản</h3>
            <p>
              Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu
              thẻ để đặt phòng lần sau.
            </p>
          </div>
        </Col>
        <Col className="colRegis" md={12} xs={24}>
          <div className="media">
            <img src={bag} alt="bag" width="65px" height="70px" />
            <h3>Ưu đãi mỗi ngày</h3>
            <p>
              Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để lựa
              chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt
              nhất.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

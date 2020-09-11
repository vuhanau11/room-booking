import React from 'react'
import { Row, Col } from 'antd'
import '../styles/ShortAbout.css'
import logo from '../assets/logo-app.jpg'
import qr from '../assets/qr-code.png'

export default function ShortAbout() {
  return (
    <div className="section">
      <Row>
        <Col md={11} xs={24}>
          <img className="app-logo" src={logo} alt="logo" />
          <h2 className="app-introduce_heading">TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT</h2>
          <p>
            Luxstay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành
            cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với
            Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng,
            chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.
          </p>
          <div className="app-introduce_action">
            <Row>
              <Col md={12}>
                <div className="qr-code">
                  <img src={qr} alt="qr-code" width="180" height="56" />
                </div>
              </Col>
              <Col md={12} className="is-flex">
                <Row>
                  <Col md={12} className="store">
                    <a href="https://apps.apple.com/us/app/luxstay-%C4%91%E1%BA%B7t-ph%C3%B2ng-homestay/id1339510380">
                      <img
                        src="https://www.luxstay.com/icons/apple-store.svg"
                        alt="apple"
                      />
                    </a>
                  </Col>
                  <Col md={12} className="store">
                    <img
                      src="https://www.luxstay.com/icons/huawei.svg"
                      alt=""
                    />
                  </Col>
                  <Col md={12} className="store">
                    <a href="https://play.google.com/store/apps/details?id=net.luxstay.android">
                      <img
                        src="https://www.luxstay.com/icons/google-play.svg"
                        alt=""
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={12} xs={24}>
          <img src="https://i.imgur.com/u6da5d1.png" alt="" />
        </Col>
      </Row>
    </div>
  )
}

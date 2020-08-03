import React from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import coin from '../assets/coin.jpg';
import top from '../assets/top.jpg';
import money from '../assets/money.jpg';
import bag from '../assets/bag.jpg';

export default function Register() {
  const onSubmit = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="loginScreen">
      <div className="regisMain">
        <div className="regisBanner">
          <Row>
            <Col md={18} xs={24}>
              <div className="text">
                <h1>
                  Đăng ký thành viên Luxstay - Tích điểm thưởng và nhận ưu đãi
                </h1>
                <span className="bannerContent">
                  Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay
                  quyền lợi.
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="regisContent">
          <Row>
            <Col md={16} xs={24}>
              <Row>
                <Col className="colRegis" md={12} xs={24}>
                  <div className="media">
                    <img src={coin} alt="coin" width="65px" height="70px" />
                    <h3>Tích điểm nhanh chóng</h3>
                    <p>
                      Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi
                      thành Lux Credit để du lịch nhiều hơn nữa.
                    </p>
                  </div>
                </Col>
                <Col className="colRegis" md={12} xs={24}>
                  <div className="media">
                    <img src={top} alt="top" width="65px" height="70px" />
                    <h3>Tiện ích thông minh</h3>
                    <p>
                      Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có
                      kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
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
                      Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức
                      năng lưu thẻ để đặt phòng lần sau.
                    </p>
                  </div>
                </Col>
                <Col className="colRegis" md={12} xs={24}>
                  <div className="media">
                    <img src={bag} alt="bag" width="65px" height="70px" />
                    <h3>Ưu đãi mỗi ngày</h3>
                    <p>
                      Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch
                      để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện
                      nghi với giá tốt nhất.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={8} xs={24}>
              <div className="resAccount">
                <h3 className="title">Đăng ký thành viên</h3>
                <Form
                  name="normal_login"
                  className="regis-form"
                  onFinish={onSubmit}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Email!',
                      },
                    ]}
                  >
                    <label>Địa chỉ email</label>
                    <Input
                      className="input"
                      prefix={<i className="fa fa-envelope"></i>}
                      placeholder="Địa chỉ email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message:
                          'Số điện thoại chỉ có thể chứa các kí tự số và dấu thập phân',
                      },
                    ]}
                  >
                    <label>Số điện thoại</label>
                    <Input
                      type="number"
                      className="input"
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Tên',
                      },
                    ]}
                  >
                    <label>Tên</label>
                    <Input className="input" />
                  </Form.Item>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Họ và đệm',
                      },
                    ]}
                  >
                    <label>Họ và tên đệm</label>
                    <Input className="input" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                      },
                    ]}
                  >
                    <label>Mật khẩu </label>
                    <span>(Tối thiểu 8 ký tự)</span>
                    <Input
                      className="input"
                      prefix={<i className="fa fa-lock"></i>}
                      type="password"
                    />
                  </Form.Item>
                  <Form.Item name="confirmPassword">
                    <label>Xác nhận mật khẩu mới</label>
                    <Input
                      className="input"
                      prefix={<i className="fa fa-lock"></i>}
                      type="password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" className="regis-form-button">
                      Đăng ký
                    </Button>
                  </Form.Item>
                  <div className="center-xs">
                    <Form.Item>
                      <span>Bạn đã có tài khoản Luxstay? </span>
                      <Link to="/login" className="link">
                        Đăng nhập
                      </Link>
                    </Form.Item>
                    <Form.Item>
                      <span>
                        Tôi đồng ý với Bảo mật và Điều khoản hoạt động của
                        Luxstay.
                      </span>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

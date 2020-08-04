import React from 'react';
import '../styles/Register.css';
import '../styles/RegisScreen.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import coin from '../assets/coin.jpg';
import top from '../assets/top.jpg';
import money from '../assets/money.jpg';
import bag from '../assets/bag.jpg';

export default function Register() {
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
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
            <Col md={16} xs={24} className="core-values-regis">
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
              <div className="regisAccount">
                <h3 className="title">Đăng ký thành viên</h3>
                <Form
                  {...layout}
                  name="normal_register"
                  className="regis-form"
                  onFinish={onSubmit}
                >
                  <Form.Item
                    name="email"
                    label="Địa chỉ email"
                    rules={[
                      {
                        type: 'email',
                        message: 'You need to enter a valid Email',
                      },
                      {
                        required: true,
                        message: 'Vui lòng nhập Email!',
                      },
                    ]}
                  >
                    <Input className="input" prefix={<MailOutlined />} />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                      {
                        required: true,
                        message:
                          'Số điện thoại chỉ có thể chứa các kí tự số và dấu thập phân',
                      },
                      {
                        min: 10,
                        message: 'Số điện thoại có ít nhất 10 kí tự số',
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      className="input"
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label="Tên"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Tên',
                      },
                    ]}
                  >
                    <Input className="input" maxLength="10" />
                  </Form.Item>
                  <Form.Item
                    name="firstName"
                    label="Họ và tên đệm"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Họ và đệm',
                      },
                    ]}
                  >
                    <Input className="input" maxLength="25" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Mật khẩu (Tối thiểu 8 ký tự)"
                    rules={[
                      {
                        min: 8,
                        message: 'Mật khẩu phải ít nhất 8 ký tự',
                      },
                      {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      className="input"
                      prefix={<LockOutlined />}
                      type="password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirmPassword"
                    label="Xác nhận mật khẩu mới"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng xác nhận mật khẩu',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            'Mật khẩu xác nhận phải trùng với mật khẩu vừa tạo'
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className="input"
                      prefix={<LockOutlined />}
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

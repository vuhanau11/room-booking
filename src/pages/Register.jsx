import React from 'react';
import Footer from '../components/Footer';
import RegisScreen from '../components/RegisScreen';

import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { layout } from '../models/layout';

import '../styles/RegisScreen.css';
import '../styles/Register.css';

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
            <Col md={16} xs={24} className="core-values-regis">
              <RegisScreen />
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
                        message: 'Vui lòng nhập số điện thoại',
                      },
                      {
                        min: 10,
                        message: 'Số điện thoại có ít nhất 10 kí tự số',
                      },
                      {
                        max: 11,
                        message: 'Số điện thoại có nhiều nhất 11 kí tự số',
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

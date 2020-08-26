import React, { useState } from 'react';
import RegisScreen from '../components/RegisScreen';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { toast } from 'react-toastify';

import '../styles/Login.css';

import AuthService from '../services/AuthService';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = () => {
    AuthService.login(email, password).then(
      () => {
        props.history.push('/home');
        window.location.reload();
      },
      (err) => {
        toast.error(err.response.data.message);
      }
    );
  };

  return (
    <>
      <Navbar />
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
                    Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh
                    ngay quyền lợi.
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="regisContent">
            <Row>
              <Col md={16} xs={24} className="core-values-login">
                <RegisScreen />
              </Col>
              <Col md={8} xs={24}>
                <div className="loginAccount">
                  <h3 className="title">Đăng nhập</h3>
                  <div className="input-group">
                    <label className="input-group-label">
                      Đăng nhập Luxstay để trải nghiệm
                    </label>
                  </div>
                  <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={handleLogin}
                  >
                    <Form.Item
                      name="email"
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
                      <Input
                        className="input"
                        prefix={<MailOutlined />}
                        placeholder="Địa chỉ email"
                        onChange={onChangeEmail}
                      />
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
                      <Input.Password
                        className="input"
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Mật khẩu"
                        onChange={onChangePassword}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" className="login-form-button">
                        Đăng nhập
                      </Button>
                    </Form.Item>
                    <div className="center-xs">
                      <Form.Item>
                        <span>Quên mật khẩu? </span>
                        <Link to="/" className="link">
                          Nhấn vào đây
                        </Link>
                      </Form.Item>
                      <Form.Item>
                        <span>Bạn chưa có tài khoản Luxstay? </span>
                        <Link to="/register" className="link">
                          Đăng ký
                        </Link>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
          <Toast />
          <Footer />
        </div>
      </div>
    </>
  );
}

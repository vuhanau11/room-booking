import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input } from 'antd';
import { layout } from '../models/layout';
import logo1 from '../assets/logo1.jpg';
import '../styles/Checkout.css';
import 'antd/dist/antd.css';
import { Steps, Button, message, Select } from 'antd';
import Footer from '../components/Footer';
import CheckoutInfo from '../components/CheckoutInfo';
import RoomCheckoutInfo from '../components/RoomCheckoutInfo';

export default function Checkout(props) {
  console.log(props);
  const { Option } = Select;
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const handleChange = (e) => {
    console.log(`selected ${e}`);
  };
  const { Step } = Steps;
  const steps = [
    {
      title: 'Thông tin đặt chỗ',
      content: (
        <>
          <Row>
            <Col md={12} xs={24}>
              <div>
                <CheckoutInfo
                  guest={props.location.state.currentGuest}
                  date={props.location.state.date}
                  roomDetail={props.location.state.roomDetail}
                  fromDateString={props.location.state.fromDateString}
                  toDateString={props.location.state.toDateString}
                />
                <div className="checkout-title">
                  <h3>Thông tin của bạn</h3>
                </div>
                <div className="space-loose">
                  <Form {...layout} name="normal_checkout">
                    <Row>
                      <Col md={23}>
                        <Form.Item
                          name="name"
                          label="Tên Khách hàng"
                          className="input-group-label"
                          rules={[
                            {
                              required: true,
                              message: 'Vui lòng nhập tên',
                            },
                          ]}
                        >
                          <Input
                            className="input input-checkout customer"
                            onChange={onChangeName}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={11}>
                        <Form.Item
                          name="phone"
                          label="Số điện thoại"
                          className="input-group-label"
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
                              message:
                                'Số điện thoại có nhiều nhất 11 kí tự số',
                            },
                          ]}
                        >
                          <Input
                            className="input input-checkout customer"
                            type="number"
                            onChange={onChangePhone}
                          />
                        </Form.Item>
                      </Col>
                      <Col md={1}></Col>
                      <Col md={11}>
                        <Form.Item
                          name="email"
                          label="Email"
                          className="input-group-label"
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
                            className="input input-checkout customer"
                            onChange={onChangeEmail}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                  <div className="checkout-title">
                    <h3>Thông tin thêm</h3>
                  </div>
                  <div className="input-group">
                    <label className="input-group-label">
                      <span className="text-danger">*</span>Mục đích của chuyến
                      đi này?
                    </label>
                  </div>
                  <Row>
                    <Col md={11}>
                      <Select
                        defaultValue="family"
                        style={{ width: '100%' }}
                        onChange={handleChange}
                      >
                        <Option value="party">Tổ chức tiệc</Option>
                        <Option value="family">Dành cho gia đình</Option>
                        <Option value="onsite">Công tác</Option>
                        <Option value="other">Khác</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={4} xs={24}></Col>
            <Col md={8} xs={24}>
              <RoomCheckoutInfo
                guest={props.location.state.currentGuest}
                date={props.location.state.date}
                roomDetail={props.location.state.roomDetail}
                fromDateString={props.location.state.fromDateString}
                toDateString={props.location.state.toDateString}
                additionalGuests={props.location.state.additionalGuests}
                roomPrice={props.location.state.roomPrice}
                totalPrice={props.location.state.totalPrice}
                totalPriceWithoutAddGuest={
                  props.location.state.totalPriceWithoutAddGuest
                }
              />
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: 'Xác nhận và thanh toán',
      content: (
        <>
          <Row>
            <Col md={12} xs={24}></Col>
            <Col md={4} xs={24}></Col>
            <Col md={8} xs={24}>
              <RoomCheckoutInfo
                guest={props.location.state.currentGuest}
                date={props.location.state.date}
                roomDetail={props.location.state.roomDetail}
                fromDateString={props.location.state.fromDateString}
                toDateString={props.location.state.toDateString}
                additionalGuests={props.location.state.additionalGuests}
                roomPrice={props.location.state.roomPrice}
                totalPrice={props.location.state.totalPrice}
                totalPriceWithoutAddGuest={
                  props.location.state.totalPriceWithoutAddGuest
                }
              />
            </Col>
          </Row>
        </>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  return (
    <>
      <nav className="menuBar">
        <div className="logo-checkout">
          <Link to="/">
            <img src={logo1} alt="logo" />
          </Link>
        </div>
        <Steps
          current={current}
          className="steps"
          type="navigation"
          size="small"
        >
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </nav>
      <div className="checkout">
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button className="next rounded" onClick={next}>
              Thanh toán »
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() =>
                message.success(props.location.state.fromDateString)
              }
            >
              Done
            </Button>
          )}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

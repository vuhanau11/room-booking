import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input } from 'antd';
import { layout } from '../models/layout';
import logo1 from '../assets/logo-app.jpg';
import '../styles/Checkout.css';
import 'antd/dist/antd.css';
import { Steps, Button } from 'antd';
import Footer from '../components/Footer';
import CheckoutInfo from '../components/CheckoutInfo';
import RoomCheckoutInfo from '../components/RoomCheckoutInfo';
import Paypal from '../components/Paypal';
import Service from '../services/ApiService';

export default function Checkout(props) {
  const initialState = {
    name: '',
    phone: '',
    email: '',
  };
  const price =
    props.location.state.currentGuest > props.location.state.roomDetail.guests
      ? props.location.state.totalPriceNumber
      : props.location.state.totalPriceWithoutAddGuestNumber;
  const priceInUSD =
    props.location.state.currentGuest > props.location.state.roomDetail.guests
      ? props.location.state.totalPriceInUSD
      : props.location.state.totalPriceWithoutAddGuestInUSD;
  const [current, setCurrent] = useState(0);
  const [checkoutInfo, setCheckoutInfo] = useState(initialState);

  const next = () => {
    setCurrent(current + 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCheckoutInfo({ ...checkoutInfo, [name]: value });
  };

  const saveCheckoutInfo = (value) => {
    const data = {
      name: checkoutInfo.name,
      phone: checkoutInfo.phone,
      email: checkoutInfo.email,
      currentGuest: props.location.state.currentGuest,
      date: props.location.state.date,
      fromDate: props.location.state.fromDateUTC,
      toDate: props.location.state.toDateUTC,
      roomId: props.location.state.roomDetail.id,
      roomName: props.location.state.roomDetail.name,
      address: props.location.state.roomDetail.address,
      price: price,
      bookTime: value.create_time,
      transactionCode: value.id,
      status: value.status,
      payerId: value.payer.payer_id,
      payerEmail: value.payer.email_address,
    };

    Service.checkout(data)
      .then((response) => {
        setCheckoutInfo({
          name: response.data.name,
          phone: response.data.phone,
          email: response.data.email,
          currentGuest: response.data.currentGuest,
          date: response.data.date,
          fromDate: response.data.fromDateUTC,
          toDate: response.data.toDateUTC,
          roomId: response.data.id,
          roomName: response.data.name,
          address: response.data.address,
          price: response.data.price,
          bookTime: response.data.create_time,
          transactionCode: response.data.id,
          status: response.data.status,
          payerId: response.data.payer_id,
          payerEmail: response.data.email_address,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
                  <Form {...layout} name="normal_checkout" onFinish={next}>
                    <Row>
                      <Col md={24} xs={24}>
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
                            onChange={handleInputChange}
                            value={checkoutInfo.name}
                            id="name"
                            name="name"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} xs={24} className="phone-input">
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
                            onChange={handleInputChange}
                            value={checkoutInfo.phone}
                            id="phone"
                            name="phone"
                          />
                        </Form.Item>
                      </Col>
                      <Col md={12} xs={24} className="email-input">
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
                            onChange={handleInputChange}
                            value={checkoutInfo.email}
                            id="email"
                            name="email"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button htmlType="submit" className="next rounded">
                      Thanh toán »
                    </Button>
                  </Form>
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
            <Col md={12} xs={24}>
              <div className="payment-div">
                <Paypal
                  price={priceInUSD}
                  roomDetail={props.location.state.roomDetail}
                  onCheckout={saveCheckoutInfo}
                  emailInfo={checkoutInfo.email}
                />
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
        <div className="checkout-container">
          <div className="steps-content">{steps[current].content}</div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

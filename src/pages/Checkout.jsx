import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.jpg';
import '../styles/Checkout.css';
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import { useState } from 'react';

const { Step } = Steps;
const steps = [
  {
    title: 'Thông tin đặt chỗ',
    content: (
      <>
        <div></div>
      </>
    ),
  },
  {
    title: 'Xác nhận và thanh toán',
    content: 'Second-content',
  },
];

export default function Checkout() {
  const [current, setCurrent] = useState(0);

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
            <Button type="primary" onClick={next}>
              Thanh toán
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

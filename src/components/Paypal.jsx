import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Paypal(props) {
  const { price, roomDetail, onCheckout, emailInfo } = props;
  const [paidInfo, setPaidInfo] = useState({});
  const [paid, setPaid] = useState(false);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `Checkout ${roomDetail.name}`,
                amount: {
                  currency_code: 'USD',
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          setPaidInfo(order, onCheckout(order));
        },
        onError: (err) => {
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [roomDetail.name, price]);
  console.log(paidInfo);

  if (paid) {
    return (
      <div className="checkout-title">
        <h3>Cảm ơn bạn đã đặt phòng tại Luxstay!</h3>
        <p className="result-checkout">
          Chúng tôi đã gửi thông tin đặt phòng và biên lai đến email{' '}
          <b className="emailInfo">{emailInfo}</b>. Bạn vui lòng kiểm tra hộp
          thư đến trong ít phút
        </p>
        <Link to="/home">
          <Button className="next rounded">Quay về trang chủ</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="checkout-title">
        <h3>Chọn phương thức thanh toán</h3>
      </div>
      <div ref={paypalRef} />
    </div>
  );
}

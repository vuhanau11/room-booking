import React, { useState, useEffect, useRef } from 'react';

export default function Paypal(props) {
  console.log(props);
  const { price, roomDetail } = props;
  const [paidInfo, setPaidInfo] = useState({});
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  const checkoutInfo = () => {
    props.onCheckout();
  };

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
          checkoutInfo();
          setPaidInfo(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [roomDetail.name, price]);
  console.log(paidInfo);

  if (paid) {
    return (
      <div>
        <p>{paidInfo.id}</p>
      </div>
    );
  }

  return (
    <>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <div ref={paypalRef} />
    </>
  );
}

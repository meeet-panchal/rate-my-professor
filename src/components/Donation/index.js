import { Typography, Space, Divider, Button } from 'antd';
import { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { H1 } from "../../styleComponents.js";
import Container from "react-bootstrap/Container";

const DonationButton = ({ amount }) => {

  const amountRef = useRef(amount);

  useEffect(() => { amountRef.current = amount; }, [amount]);

  return (

    <PayPalButtons

      style={{ layout: 'vertical' }}

      createOrder={(data, actions) => actions.order.create({
        purchase_units: [
          {
            amount: {
              value: amountRef.current.toString(),
            },
          },
        ],
      })}

      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
        console.log("Details : ", details);
        toast.success(`Thanks for your donation ${name}`)
      }}

      onCancel={async (data, actions) => {
        toast("You closed the window", { icon: "⚠️" })
      }}

      onError={() => {
        toast.error("Payment could not be captured.")
      }}

    />
  )
}



const Donation = props => {

  // const positiveFloatNumberRegex = new RegExp('^(?:[1-9]d*|0)?(?:.d+)?$', 'g');

  const [donationAmount, setDonationAmount] = useState(0)

  const { Text } = Typography

  const donationAmountChangeHandler = (e) => {
    const inputValue = parseInt(e.target.value)
    if (!inputValue) {
      setDonationAmount(0)
      toast('Donation amount should be greater than zero.', { id: "amount error", icon: "🚫" });
    } else {
      setDonationAmount(inputValue)
    }
  }

  const setDonationValue = (value) => setDonationAmount(value)

  return (
    <div>
      <div className="App">
        <Container>
          <H1>Donation</H1>
          <Toaster />
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>

            <p>
              Our website in 100% free to use and we don't show ads.
              We are bunch of developers who wants to contribute back to the community we came from,
              a small donation will give us a sense of appritiation.
            </p>
            <div className='text-center'>
              <Text>Enter your amount</Text>{" "}{" "}{" "}{" "}

              <input type={''} value={donationAmount} onInput={donationAmountChangeHandler} />
            </div>
            <Divider orientation="center">or choose this amount</Divider>
            <div className="d-flex justify-content-center">
              <Space direction='horizontal' size="middle" style={{ display: 'flex' }}>

                <Button onClick={() => setDonationValue(2)} type="dashed">2 CAD</Button>
                <Button onClick={() => setDonationValue(3)} type="dashed">3 CAD</Button>
                <Button onClick={() => setDonationValue(5)} type="dashed">5 CAD</Button>

              </Space>

            </div>
            <div className='text-center'>
              <Space>

                <PayPalScriptProvider options={{
                  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                  currency: "CAD",
                  intent: "capture",
                }}>
                  <DonationButton amount={donationAmount} />
                </PayPalScriptProvider>

              </Space>
            </div>
          </Space>

        </Container>

      </div>

    </div>
  )
}

export default Donation
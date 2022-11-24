import { Typography, Space, Divider, Button, Input } from 'antd';
import { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Paragraph } from '../../styleComponents';
import MainHeader from "../MainHeader";
import {
    BsGithub,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsFillEmojiLaughingFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
    BsFillEmojiHeartEyesFill,
    BsFillEmojiAngryFill,
    BsFillAlarmFill,
    BsFillEnvelopeFill,
    BsFillTelephoneFill,
    BsBuilding,
    BsFacebook,
  } from "react-icons/bs";
  import { H1 } from "../../styleComponents.js";
  import Container from "react-bootstrap/Container";

const { Text } = Typography






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

            onCancel = {async (data,actions)=>{
                toast("You closed the window",{icon:"⚠️"})
            }}

            onError = {()=>{
                toast.error("Payment could not be captured.")
            }}

        />
    )
}



const Donation = props => {

    // const positiveFloatNumberRegex = new RegExp('^(?:[1-9]d*|0)?(?:.d+)?$', 'g');

    const [donationAmount, setDonationAmount] = useState(0)


    const donationAmountChangeHandler = (e) => {

        const inputValue = parseInt(e.target.value)
        if (!inputValue) {
            setDonationAmount(0)
            toast('Donation amount should be greater than zero.',{id:"amount error",icon:"🚫"});
        } else {
            setDonationAmount(inputValue)
        }
    }

    const setDonationValue = (value) => setDonationAmount(value)

    return (
        <div>
            <div className="App">
      <section className="header">
        <nav>
          <div className="logo">
            <a href="index.html">

              <span id="part1">Rate My</span>
              <span id="part2"> Professor</span>

            </a>
          </div>
          <MainHeader></MainHeader>
          {/* <i className="fa fa-bars" onClick="showmenu()"></i> */}
        </nav>
        <div className="text-box">
          <H1>
            <BsFillEmojiLaughingFill></BsFillEmojiLaughingFill>{" "}
            <BsFillEmojiNeutralFill></BsFillEmojiNeutralFill>{" "}
            <BsFillEmojiFrownFill></BsFillEmojiFrownFill>{" "}
            <BsFillEmojiHeartEyesFill></BsFillEmojiHeartEyesFill>{" "}
            <BsFillEmojiAngryFill></BsFillEmojiAngryFill>
          </H1>

          <Paragraph>
            Give 5 Star rating to ypur professor. Because you are learning at
            your college for pursue your career in better direct.<br></br>
            But they are struggling more to provide you better education.
            <br></br>
            Just say thank you to them by providing ratings here.
          </Paragraph>
          <a href="table.html" className="visit-btn">
            RATING
          </a>
        </div>
      </section>
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
                <Divider orientation="center">Or choose this amount</Divider>
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
            <footer className="footer-distributed">

<div className="footer-left">

  <h3>Rate <span>MyProfessor</span></h3>

  <p className="footer-links">
    <a href="#" className="link-1">Home</a>

    <a href="#">Home</a>

    <a href="#">Rating</a>

    <a href="#">Universities</a>

    <a href="#">About</a>

    <a href="#">Contact</a>
  </p>

  <p className="footer-company-name"> Rate My Professor © 2015</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p> 299 Doon Valley Drive. Kitchener, Ontario N2G 4M4t</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+1 8320650059</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">ratemyprofessor@gmail.com</a></p>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span>About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div className="footer-icons">

    <a href="#"><i className="fa fa-facebook"></i><BsFacebook></BsFacebook></a>

    <a href="#"><i className="fa fa-twitter"></i><BsTwitter></BsTwitter></a>
    <a href="#"><i className="fa fa-linkedin"></i><BsLinkedin></BsLinkedin></a>
    <a href="#"><i className="fa fa-github"></i><BsGithub></BsGithub></a>

  </div>

</div>

</footer>
     
            </div>

        </div>
    )
}

export default Donation
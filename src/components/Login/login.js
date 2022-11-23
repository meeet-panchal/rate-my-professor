import Container from "react-bootstrap/Container";
import registrationApi from "../../api/registrationApi";
import MainHeader from "../MainHeader";
import "../../App.css";
import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import React, { useState } from "react";
import "../../styleComponents.js";
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
import { Paragraph } from "../../styleComponents.js";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterationForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const {
    
      email,
      password,
    } = values;

    const registerationDetails = {
      
      email: email,
      password: password,
    };
    const response = await registrationApi.post(
      "/register",
      registerationDetails
    );
    console.log("Received values of form: ", values);
    console.log("values passed from the form", response);
  };

  return (
    <>
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
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          

         
          <Form.Item
            name="email"
            label="E-mail"
            pattern="/^[a-zA-Z0-9.!#$%&'+\=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/g
            "
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            pattern=" /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/g"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

        

          

          <Form.Item {...tailFormItemLayout}>
            <Button className="visit-btn" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
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
    </>
  );
};
export default RegisterationForm;

import { Carousel } from "antd";
import Container from "react-bootstrap/Container";
import MainHeader from "../MainHeader";
import "./universities.css";
import "../../App.css";
import {

  Paragraph,
  H1,
  UL,
  LI,
  A,
  H2,
  H3,
  H4,
} from "../../styleComponents.js";
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

import React from "react";

import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";
const { TextArea } = Input;
const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // backgroundImage: ' url("images/background/bg-image3.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

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
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Ratings = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="App">
   
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
    
       
    
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle} className="uni1">
            
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="uni2">
            
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="uni3">
            
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="uni4">
        
          </h3>
        </div>
      </Carousel>
<Container>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          "checkbox-group": ["A", "B"],
          rate: 3.5,
        }}
      >
        <H1>Rate your University</H1>

       

        <Form.Item
          name="University"
          label="University"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your University!",
            },
          ]}
        >
          <Select placeholder="Please select University">
            <Option value="university of waterloo">
              University of Waterloo
            </Option>
            <Option value="conestoga college">Conestoga College</Option>
          </Select>
        </Form.Item>

        <Form.Item name="rate" label="Rate">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Reputation">
          <Rate />
        </Form.Item>

        <Form.Item name="rate" label="Rate">
          <Rate />
        </Form.Item>

        <Form.Item name="rate" label="Rate">
          <Rate />
        </Form.Item>

        <Form.Item
          name="tags"
          label="Tags"
          rules={[
            {
              required: true,
              message: "Please select your tags!",
              type: "array",
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Please select tags for your professor"
          >
            <Option value="Respected">Respected</Option>
            <Option value="Clear instructions">Clear instructions</Option>
            <Option value="Clear grading criteria">
              Clear grading criteria
            </Option>
          </Select>
        </Form.Item>

        <Form.Item name="recommend" label="Recommend">
          <Slider
            marks={{
              0: "Poor",
              20: "Below average",
              40: "Good",
              60: "Above average",
              80: "Excellent",
              100: "Proficient",
            }}
          />
        </Form.Item>

        <Form.Item name="attendance" label="Was attendance mandatory?">
          <Radio.Group>
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="recommend" label="Will you recommend this professor?">
          <Radio.Group>
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="feedback" label="Feedback">
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </Form.Item>

        {/* <Form.Item label="InputNumber">
          <Form.Item name="input-number" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> machines</span>
        </Form.Item>

        <Form.Item name="switch" label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item
          name="radio-button"
          label="Radio.Button"
          rules={[
            {
              required: true,
              message: "Please pick an item!",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="a">item 1</Radio.Button>
            <Radio.Button value="b">item 2</Radio.Button>
            <Radio.Button value="c">item 3</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Checkbox.Group">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="A"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="B"
                  style={{
                    lineHeight: "32px",
                  }}
                  disabled
                >
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="C"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="D"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="E"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="F"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
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
    
  );
};

export default Ratings;

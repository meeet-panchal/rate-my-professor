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

const Universities = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="App">
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

        <Form.Item  className="star" name="rate" label="Location">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Opportunities">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="ReputaFacilities and common areastion">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Internet">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Food">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Club">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Social">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Happiness">
          <Rate />
        </Form.Item>

        <Form.Item  className="star" name="rate" label="Safety" rules={[
            {
              required: true,
              message: "Please select your tags!",
              type: "array",
            },
          ]}>
          <Rate />
        </Form.Item>

        
         

        <Form.Item name="feedback" label="Feedback">
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
          className=" d-flex justify-content-center"
        >
          <Button type="primary" htmlType="submit" className="btnuni">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Container>
    </div>
    
  );
};

export default Universities;

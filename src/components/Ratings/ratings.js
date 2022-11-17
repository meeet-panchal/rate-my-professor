import { Carousel } from "antd";
import MainHeader from "../MainHeader";
import "./ratings.css";
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
    <div>
      <MainHeader></MainHeader>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle} className="bg-image1">
            1
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image2">
            2
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image3">
            3
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image4">
            4
          </h3>
        </div>
      </Carousel>

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
        <h2 className="header-text">Rate your Professor!</h2>

        <Form.Item
          name="Professor name"
          label="Professor"
          rules={[
            {
              required: true,
              message: "Please input Professor name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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
    </div>
  );
};

export default Ratings;

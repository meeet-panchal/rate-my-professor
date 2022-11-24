import { Carousel } from "antd";
import registrationApi from "../../api/registrationApi";
import Container from "react-bootstrap/Container";
import MainHeader from "../MainHeader";
import "./ratings.css";
import "../../App.css";
import { Paragraph, H1, UL, LI, A, H2, H3, H4 } from "../../styleComponents.js";
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
      span: 10,
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
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const {
      university,
      rate,
      tags,
      teaching,
      isAttendance,
      isRecommend,
      isCredit,
      isTextbook,
      feedback,
      examtypes,
    } = values;

    const professorDetails = {
      university: university,
      rate: rate,
      tags: tags,
      teaching: teaching,
      isAttendance: isAttendance,
      isRecommend: isRecommend,
      isCredit: isCredit,
      isTextbook: isTextbook,
      feedback: feedback,
      examtypes: examtypes,
    };
    const response = await registrationApi.post(
      "/professors",
      professorDetails
    );
    console.log("Received values of form: ", values);
    console.log("values passed from the form", response);
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
          <h3 style={contentStyle} className="bg-image1"></h3>
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image2"></h3>
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image3"></h3>
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image4">
            4
          </h3>
        </div>
      </Carousel>
      <Container>
        <Form
          {...formItemLayout}
          form={form}
          name="validate_other"
          onFinish={onFinish}
          initialValues={{
            "input-number": 3,
            "checkbox-group": ["A", "B"],
            rate: 3.5,
          }}
        >
          <H1>Rate your Professor</H1>

          <Form.Item
            name="university"
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

          <Form.Item
            name="rate"
            label="Rate"
            rules={[
              {
                required: true,
                message: "Please rate your professor!",
              },
            ]}
          >
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

          <Form.Item
            name="teaching"
            label="Teaching"
            rules={[
              {
                required: true,
                message: "Please rate the teaching experience!",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            name="isAttendance"
            label="Was attendance mandatory?"
            rules={[
              {
                required: true,
                message: "Please choose if attendance was mandatory!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="true">Yes</Radio>
              <Radio value="false">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="isRecommend"
            label="Will you recommend this professor?"
            rules={[
              {
                required: true,
                message: "Please input if you would recommend this professor!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="true">Yes</Radio>
              <Radio value="false">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="isCredit"
            label="Was this class taken for credit?"
            rules={[
              {
                required: true,
                message: "Please input if credit was mandatory!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="true">Yes</Radio>
              <Radio value="false">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="isTextbook"
            label="Did this professor use textbooks?"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Please choose if textbook was mandatory!",
              },
            ]}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="feedback"
            label="Feedback"
            rules={[
              {
                required: true,
                message: "Please enter feedback!",
              },
            ]}
          >
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={500} />
          </Form.Item>

          <Form.Item
            name="examtypes"
            label="What type of exams did this professor give?"
            rules={[
              {
                required: true,
                message: "Please check the examtypes!",
              },
            ]}
          >
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox
                    value="Multiple Choice"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Multiple Choice
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="True/False"
                    style={{
                      lineHeight: "32px",
                    }}
                    disabled
                  >
                    True/False
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Essay"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Essay
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Written Problems"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Written Problems
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Group Projects"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Group Projects
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Individual Assignments"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Individual Assignments
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "20vw",
                backgroundColor: "#198754",
                border: "1px solid #198754",
                borderRadius: "5px",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Rate <span>MyProfessor</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

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
            <p>
              <a href="mailto:support@company.com">ratemyprofessor@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
              <BsFacebook></BsFacebook>
            </a>

            <a href="#">
              <i className="fa fa-twitter"></i>
              <BsTwitter></BsTwitter>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
              <BsLinkedin></BsLinkedin>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
              <BsGithub></BsGithub>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ratings;

import Container from "react-bootstrap/Container";
import registrationApi from "../../api/registrationApi";
import MainHeader from "../MainHeader";
import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import React, { useState } from "react";
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
      firstName,
      email,
      institution,
      department,
      isStudent,
      lastName,
      password,
    } = values;

    const registerationDetails = {
      firstName: firstName,
      email: email,
      institution: institution,
      department: department,
      isStudent: isStudent,
      lastName: lastName,
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
      <MainHeader></MainHeader>
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
            name="firstName"
            label="Firstname"
            rules={[
              {
                required: true,
                message: "Please input your Firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Lastname"
            rules={[
              {
                required: true,
                message: "Please input your Lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
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

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="institution"
            label="Institution"
            rules={[
              {
                required: true,
                message: "Please input your Institution!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="department"
            label="Department"
            rules={[
              {
                required: true,
                message: "Please input your Department!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="isStudent"
            label="Type"
            rules={[
              {
                required: true,
                message: "Please select student or professor!",
              },
            ]}
          >
            <Select placeholder="Select your Type">
              <Option value="true">Student</Option>
              <Option value="false">Professor</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
};
export default RegisterationForm;

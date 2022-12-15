import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import registrationApi from "../../api/registrationApi";

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
  const navigate = useNavigate();

  const [department, setDepartment] = useState([]);
  const [institution, setInstitution] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3600/institutions")
      .then((data) => setInstitution(data?.data?.data));
    axios
      .get("http://localhost:3600/departments")
      .then((data) => setDepartment(data?.data?.data));
  }, []);

  const onFinish = async (values) => {
    const {
      firstName,
      email,
      institution,
      department,
      isStudent,
      lastName,
      password,
      year,
    } = values;

    const registerationDetails = {
      firstName: firstName,
      email: email,
      institution: institution,
      department: department,
      isStudent: isStudent,
      lastName: lastName,
      password: password,
      year,
    };
    registrationApi
      .post("/register", registerationDetails)
      .then((data) => {
        if (data?.status === 201) {
          toast.success(data?.data?.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <>
      <div className="App">
        <Toaster />
        <Container className="my-5">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{}}
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
              <Select placeholder="Select your Type">
                {institution.map((data) => (
                  <Option value={data?._id}>{data?.universityname}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="department"
              label="Department"
              rules={[
                {
                  required: true,
                  message: "Please select your department",
                },
              ]}
            >
              <Select placeholder="Select your Type">
                {department.map((data) => (
                  <Option value={data?._id}>{data?.name}</Option>
                ))}
              </Select>
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

            <Form.Item
              name="year"
              label="Year"
              rules={[
                {
                  required: true,
                  message: "Please input your year of graduation or teaching",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "rgb(0, 59, 73)",
                  border: "1px solid rgb(0, 59, 73)",
                  color: "#ffffff",
                  borderRadius: "5px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default RegisterationForm;

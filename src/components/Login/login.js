import Container from "react-bootstrap/Container";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Button, Form, Input } from "antd";

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

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { email, password } = values;

    const registerationDetails = {
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:3600/login", registerationDetails, {
        withCredentials: true,
        "Access-Control-Allow-Credentials": true,
      })
      .then((userData) => {
        const {
          data: {
            data: { userInfo, accessToken },
            message,
          },
        } = userData;
        localStorage.setItem("token", JSON.stringify(accessToken));
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        toast.success(message);
      });
  };

  return (
    <>
      <div className="App">
        <Toaster />
        <Container className="mt-5 pt-5">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
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
                Login
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default Login;

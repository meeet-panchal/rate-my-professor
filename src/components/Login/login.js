import Container from "react-bootstrap/Container";
import registrationApi from "../../api/registrationApi";
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
      
      </div>
    </>
  );
};
export default Login;

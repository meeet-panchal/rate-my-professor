import Container from "react-bootstrap/Container";
import { H1 } from "../../styleComponents.js";
import { Button, Form, Input, Rate } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./universities.css";

const { TextArea } = Input;

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

const Universities = () => {
  let { id } = useParams();

  const [universityDetails, setUniversityDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3600/university?id=${id}`)
      .then((data) => setUniversityDetails(data.data));
  }, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="App">
      <Container>
        <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
          <H1>Rate {universityDetails?.universityname}</H1>

          <Form.Item
            name="overallRating"
            label="Rate"
            className="star"
            rules={[
              {
                required: true,
                message: "Please rate this university",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="reputation"
            label="Reputation"
            rules={[
              {
                required: true,
                message: "Please rate reputation",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="opportunities"
            label="Opportunities"
            rules={[
              {
                required: true,
                message: "Please rate opportunities",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="facilities"
            label="Facilities"
            rules={[
              {
                required: true,
                message: "Please rate facilities",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="internet"
            label="Internet"
            rules={[
              {
                required: true,
                message: "Please rate internet",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="food"
            label="Food"
            rules={[
              {
                required: true,
                message: "Please rate food",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="club"
            label="Club"
            rules={[
              {
                required: true,
                message: "Please rate club",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="social"
            label="Social"
            rules={[
              {
                required: true,
                message: "Please rate social",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="happiness"
            label="Happiness"
            rules={[
              {
                required: true,
                message: "Please rate happiness",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            className="star"
            name="safety"
            label="Safety"
            rules={[
              {
                required: true,
                message: "Please rate safety",
              },
            ]}
          >
            <Rate />
          </Form.Item>

          <Form.Item name="feedback" label="Feedback">
            <TextArea rows={4} placeholder="Please share your thoughts" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
            className="text-center"
          >
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
};

export default Universities;

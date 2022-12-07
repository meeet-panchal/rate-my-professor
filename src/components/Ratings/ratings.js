/* eslint-disable jsx-a11y/heading-has-content */
import { Carousel } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./ratings.css";
import { H1 } from "../../styleComponents.js";
import { Button, Checkbox, Col, Form, Input, Radio, Rate, Row, Select, Switch } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const { TextArea } = Input;

const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
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

const Ratings = () => {

  const [form] = Form.useForm();
  let { id } = useParams();
  const navigate = useNavigate();


  const professorTags = ["Tough Grader", "Participation Matters", "Group Projects",
    "Lots Of Homework", "Gives Good Feedback", "Clear Grading Criteria", "Accessible Outside Class", "Graded By Few Things", "Respected"]

  const onFinish = async (values) => {
    /*     const { overallRating, tags, rateTeaching,
          isAttendanceMandatory, isRecommended, isCourseTakenForCredit,
          isTextbookPreferred, feedback, examTypes } = values */

    const token = JSON.parse(localStorage.getItem('token'))

    const ratingsFeedback = { ...values, ratingGivenFor: id };
    axios.post("http://localhost:3600/saveRatings", ratingsFeedback, { headers: { Authorization: `Bearer ${token}` } }).then(data => {
      toast.success("Feedback has been submitted!")
      setTimeout(() => {
        navigate(`/professor/${id}`)
      }, 1000);
    })
    console.log("Received values of form: ", values);
    // console.log("values passed from the form", response);
  };

  return (
    <div className="App">
      <Toaster />
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle} className="bg-image1" />
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image2" />
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image3" />
        </div>
        <div>
          <h3 style={contentStyle} className="bg-image4" />
        </div>
      </Carousel>
      <Container>
        <Form
          {...formItemLayout}
          form={form}
          name="validate_other"
          onFinish={onFinish}
        >
          <H1>Rate your Professor</H1>
          <Form.Item
            name="overallRating"
            label="Overall Rating"
            rules={[
              {
                required: true,
                message: "Please rate your professor!",
              },
            ]}
          >
            <Rate style={{ backgroundColor: 'white', padding: ' 0 2rem' }} />
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
              {
                professorTags.map(tag => (<Option value={tag}>{tag}</Option>))
              }
            </Select>
          </Form.Item>

          <Form.Item
            name="rateTeaching"
            label="Teaching"
            rules={[
              {
                required: true,
                message: "Please rate the teaching experience!",
              },
            ]}
          >
            <Rate style={{ backgroundColor: 'white', padding: ' 0 2em' }} />
          </Form.Item>

          <Form.Item
            name="isAttendanceMandatory"
            label="Was attendance mandatory?"
            rules={[
              {
                required: true,
                message: "Please choose if attendance was mandatory!",
              },
            ]}
          >
            <Radio.Group optionType="button" buttonStyle="solid">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="isRecommended"
            label="Will you recommend this professor?"
            rules={[
              {
                required: true,
                message: "Please input if you would recommend this professor!",
              },
            ]}
          >
            <Radio.Group optionType="button" buttonStyle="solid">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="isCourseTakenForCredit"
            label="Was this class taken for credit?"
            rules={[
              {
                required: true,
                message: "Please input if credit was mandatory!",
              },
            ]}
          >
            <Radio.Group optionType="button" buttonStyle="solid">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="isTextbookPreferred"
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
            <TextArea rows={4} placeholder="Your comments on professor" maxLength={500} />
          </Form.Item>

          <Form.Item
            name="examTypes"
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
                    Multiple Quiz
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
    </div>
  );
};

export default Ratings;

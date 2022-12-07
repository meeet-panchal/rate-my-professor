/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { H1 } from "../../styleComponents.js";
import toast, { Toaster } from "react-hot-toast";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Radio, Rate, Row, Select, Switch } from "antd";
import "../Ratings/ratings.css";

const { TextArea } = Input;

const { Option } = Select;

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 10 } }
};

const EditRating = () => {

    const [form] = Form.useForm();
    let { id } = useParams();
    const navigate = useNavigate();
    const [ratingsData, setRatingsData] = useState([])


    const professorTags = ["Tough Grader", "Participation Matters", "Group Projects",
        "Lots Of Homework", "Gives Good Feedback", "Clear Grading Criteria",
        "Accessible Outside Class", "Graded By Few Things", "Respected"]

    useEffect(() => {
        axios.get(`http://localhost:3600/ratings?ratingId=${id}`)
            .then(data => setRatingsData(data?.data))
    }, [])

    useEffect(() => form.resetFields(), [ratingsData]);

    const onFinish = async (values) => {

        const token = JSON.parse(localStorage.getItem('token'))

        axios.put(`http://localhost:3600/editRating/${id}`, values, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => {
                const {data:{data:{ratingGivenFor}}} = data
                toast.success("Feedback has been submitted!")

                setTimeout(() => {
                    navigate(`/professor/${ratingGivenFor}`)
                }, 1000);
            })
    };


    return (<div className="App">
        <Toaster />
        <Container>
            <Form
                {...formItemLayout}
                form={form}
                name="validate_other"
                onFinish={onFinish}
                initialValues={ratingsData}
            >
                <H1>Edit Your Rating</H1>
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
                    <Rate value={ratingsData?.overallRating} style={{ backgroundColor: 'white', padding: ' 0 2rem' }} />
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
                    <Radio.Group optionType="button" buttonStyle="solid" >
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
    )
}

export default EditRating
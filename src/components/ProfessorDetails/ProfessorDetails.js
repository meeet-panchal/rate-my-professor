import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "antd";
import React from "react";
import { Progress } from "antd";
import { Button, Descriptions, PageHeader, Statistic, Tag } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";
import MainHeader from "../MainHeader";
import { Divider } from "antd";
import "./ProfessorDetails.css";

const Professor = () => (
  <>
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

    <Container>
      <Row className="text-center">
        <Col xs={12} md={3}>
          {" "}
          <Card
            className="ant-card-head py-0"
            title="Jonathon"
            bordered={false}
          >
            <h6>Professor at Conestoga College</h6>
            <Statistic title="Overall Rating" value={93} suffix="/ 100" />

            <Row>
              <Col>
                <Divider type="vertical" />
                <Progress type="circle" percent={50} width={80} />{" "}
                <p>Would take again?</p>
              </Col>
              <Col>
                <Divider type="vertical" />
                <Progress type="circle" percent={70} width={80} />{" "}
                <p>Level of Difficulty</p>
              </Col>
            </Row>

            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "10vw",
                backgroundColor: "rgba(228, 175, 43, 0.88)",
                border: "1px solid rgba(228, 175, 43, 0.88)",
                color: "black",
                borderRadius: "5px",
              }}
            >
              Rate Professor
            </Button>
          </Card>
        </Col>
        <Col xs={12} md={9}>
          <DescriptionsItem>
            {" "}
            <div
              style={{
                width: 570,
              }}
            >
              <p className="m-0 text-start">Proficient</p>{" "}
              <Progress percent={30} />
              <p className="m-0 text-start">Excellent</p>
              <Progress percent={50} status="active" />
              <p className="m-0 text-start">Average</p>
              <Progress percent={70} status="active" />
              <p className="m-0 text-start">Good</p>
              <Progress percent={100} />
              <p className="m-0 text-start">Poor</p>
              <Progress percent={70} status="exception" />
            </div>
          </DescriptionsItem>

          <div className="text-start mt-5">
            <p className="text-start">Professor Jonathon's top tags</p>
            <Tag color="default"> TOUGH GRADER</Tag>
            <Tag color="default">PARTICIPATION MATTERS</Tag>
            <Tag color="default"> GET READY TO READ AMAZING LECTURES</Tag>
            <Tag color="default"> SKIP CLASS? YOU WON'T PASS.</Tag>
            <Tag color="default">FRIENDLY</Tag>
            <Tag color="default">CLEAR INSTRUCTIONS</Tag>
            <Tag color="default">PROJECT ORIENTED</Tag>
          </div>
        </Col>
      </Row>

      <Row
        className="site-card-border-less-wrapper mt-5"
        style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
      >
        <PageHeader
          className="site-page-header p-0"
          title="832474"
          subTitle="Average"
          extra={[
            <Button key="1" type="primary">
              27th, Nov 2022
            </Button>,
          ]}
        >
          <Descriptions size="small">
            <Descriptions.Item label="University">
              University of Waterloo
            </Descriptions.Item>
            <Descriptions.Item label="Attendance">
              <a>Yes</a>
            </Descriptions.Item>
            <Descriptions.Item label="Would you recommend?">
              Yes
            </Descriptions.Item>
            <Descriptions.Item label="Teaching">Proficient</Descriptions.Item>
            <Descriptions.Item label="Textbook">Yes</Descriptions.Item>
            <Descriptions.Item label="Credit">Yes</Descriptions.Item>

            <Descriptions.Item label="Remarks">
              Tough grader,Respected,Clear instructions,Clear grading criteria
            </Descriptions.Item>
            <Descriptions.Item label="Type of exams">
              Multiple Choice,True/False,Essay, Written Problems, Group Projects
            </Descriptions.Item>

            <Descriptions.Item
              className="rounded p-3"
              style={{ color: "#e4af2be0", backgroundColor: "#e4af2be0" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Row>
    </Container>
  </>
);
export default Professor;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "antd";
import React from "react";
import { Progress } from "antd";
import { Button, Descriptions, PageHeader, Statistic, Tag } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";

const Professor = () => (
  <Container>
    <Row
      className="site-card-border-less-wrapper"
      style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
    >
      <Col xs={12} md={3}>
        {" "}
        <Card title="Jonathon" bordered={false}>
          <p>Overall Rating</p>
          <Progress type="circle" percent={70} width={80} />
        </Card>
      </Col>

      <Col xs={12} md={9}>
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
          <Descriptions size="small" column={3}>
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
            <DescriptionsItem>
              {" "}
              <div
                style={{
                  width: 170,
                }}
              >
                <Progress percent={30} size="small" />
                <Progress percent={50} size="small" status="active" />
                <Progress percent={70} size="small" status="exception" />
                <Progress percent={100} size="small" />
              </div>
            </DescriptionsItem>
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
      </Col>
    </Row>
  </Container>
);
export default Professor;

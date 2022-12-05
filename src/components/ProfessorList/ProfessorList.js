import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "antd";
import React from "react";
import {Descriptions, Statistic} from "antd";
import "./ProfessorList.css";

const Professor = () => (
    <Container>
      <Row className="text-center">
        <Col
          xs={12}
          md={3}
          style={{
            backgroundColor: "rgba(228, 175, 43, 0.88)",
            padding: "20px",
          }}
        >
          {" "}
          <Card className="ant-card-head py-0" title="Quality" bordered={false}>
            <Statistic title="Overall Rating" value={93} suffix="/ 100" />
          </Card>
        </Col>
        <Col
          xs={12}
          md={9}
          style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
        >
          <Row className="site-card-border-less-wrapper">
            <Descriptions size="small">
              <Descriptions.Item
                label="Professor"
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                Jonathon
              </Descriptions.Item>
              <Descriptions.Item label="Department">Business</Descriptions.Item>
              <Descriptions.Item label="University">
                Conestoga College
              </Descriptions.Item>
              <Descriptions.Item label="Would take again">
                50%
              </Descriptions.Item>
              <Descriptions.Item label="Level of difficulty">
                4.1
              </Descriptions.Item>
            </Descriptions>
          </Row>
        </Col>
      </Row>
    </Container>
);
export default Professor;

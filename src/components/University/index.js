import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "antd";
import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { Button, Descriptions, PageHeader, Statistic } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";
import { Divider } from "antd";
import "./University.css";
import "../ProfessorDetails/ProfessorDetails.css";

import { Collapse } from "antd";
const { Panel } = Collapse;

const University = () => {
  const [universityDetails, setUniversityDetails] = useState([]);
  const [ratingsDetails, setRatingsDetails] = useState([]);

  let { id } = useParams();

  const getDetails = () => {
    axios
      .get(`http://localhost:3600/university?id=${id}`)
      .then((data) => setUniversityDetails(data?.data));
    axios
      .get(`http://localhost:3600/universityRating?id=${id}`)
      .then((data) => setRatingsDetails(data?.data));
  };

  useEffect(() => {
    getDetails();
  }, []);

  const userId = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))._id
    : null;

  const deleteRating = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .delete(`http://localhost:3600/deleteRating/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        const {
          data: { message },
        } = data;
        getDetails();
        toast.success(message);
      });
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
      <Toaster />
      <Container>
        <Row className="text-center bg-light py-4 professor-details">
          <Col
            xs={12}
            md={12}
            lg={3}
            className="py-4"
            style={{ backgroundColor: "#f2c75c" }}
          >
            {" "}
            <Card className="ant-card-head py-0" bordered={false}>
              <h6 className="my-4" style={{ fontSize: "25px" }}>
                Location : <br></br> {universityDetails?.location}
              </h6>
              <Statistic
                className="my-4"
                title="Overall Rating"
                value={parseFloat(universityDetails?.overallRating).toFixed(1)}
                suffix="/ 5"
              />
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#003b49",
                  border: "1px solid #003b49",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/rateUniversity/${id}`}
                >
                  Rate University
                </Link>
              </Button>
            </Card>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={9}
            className="py-4"
            style={{ backgroundColor: "#003b49" }}
          >
            <Card
              className="ant-card-head py-0"
              title={`${universityDetails?.universityname}`}
              bordered={false}
            ></Card>
            <Descriptions size="small" className="descriptions-header">
              <Descriptions.Item label="Reputation">
                {universityDetails?.reputation} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Opportunities">
                {universityDetails?.opportunities} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Facilities">
                {universityDetails?.facilities} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Internet">
                {universityDetails?.internet} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Food">
                {universityDetails?.food} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Club">
                {universityDetails?.club} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Social">
                {universityDetails?.social} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Happiness">
                {universityDetails?.happiness} / 5
              </Descriptions.Item>

              <Descriptions.Item label="Safety">
                {universityDetails?.safety} / 5
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        {Object.keys(ratingsDetails).length > 0 &&
          ratingsDetails?.data?.map((data) => {
            const {
              feedback,
              overallRating,
              ratingGivenOn,
              ratingGivenBy,
              facilities,
              _id,
            } = data;

            return (
              <Row
                className="site-card-border-less-wrapper mt-5"
                style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
                key={_id}
              >
                <div className="d-flex justify-content-end edit-delete">
                  {userId === ratingGivenBy?._id && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/editRating/${data?._id}`}
                    >
                      <i
                        className="fa fa-edit fa-lg mx-2"
                        style={{
                          color: " rgb(0, 59, 73)",
                          fontSize: "30px",
                          fontWeight: 600,
                        }}
                      ></i>
                    </Link>
                  )}
                  {userId === ratingGivenBy?._id && (
                    <Link onClick={() => deleteRating(data?._id)}>
                      <i
                        className="fa fa-trash fa-lg mx-2"
                        style={{
                          color: "#e41e1e",
                          fontSize: "30px",
                          fontWeight: 600,
                        }}
                      ></i>
                    </Link>
                  )}
                </div>

                <PageHeader
                  className="site-page-header p-0"
                  title={`USER${_id.slice(0, 4)}`}
                  subTitle={`Overall Rating ${overallRating}/5`}
                  extra={[
                    <Button key="1" type="primary">
                      {new Date(ratingGivenOn).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      {new Date(ratingGivenOn).toLocaleTimeString("en-CA", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Button>,
                  ]}
                >
                  <Descriptions size="small">
                    <Descriptions.Item label="Reputation">
                      {universityDetails?.reputation} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Opportunities">
                      {universityDetails?.opportunities} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Facilities">
                      {universityDetails?.facilities} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Internet">
                      {universityDetails?.internet} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Food">
                      {universityDetails?.food} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Club">
                      {universityDetails?.club} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Social">
                      {universityDetails?.social} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Happiness">
                      {universityDetails?.happiness} / 5
                    </Descriptions.Item>

                    <Descriptions.Item label="Safety">
                      {universityDetails?.safety} / 5
                    </Descriptions.Item>

                    <Descriptions.Item
                      className="rounded p-3"
                      label="Feedback"
                      style={{
                        color: "#e4af2be0",
                        backgroundColor: "#e4af2be0",
                      }}
                    >
                      {feedback}
                    </Descriptions.Item>
                  </Descriptions>
                </PageHeader>
              </Row>
            );
          })}
      </Container>
    </section>
  );
};
export default University;

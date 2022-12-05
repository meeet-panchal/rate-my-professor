import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "antd";
import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { Button, Descriptions, PageHeader, Statistic, Tag } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";
import { Divider } from "antd";
import "./ProfessorDetails.css";

const Professor = () => {
  const [professorDetails, setProfessorList] = useState([])
  const [ratingsDetails, setRatingsDetails] = useState([])

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3600/user?id=${id}&isStudent=false`).then(data => setProfessorList(data?.data[0]))
    axios.get(`http://localhost:3600/ratings?id=${id}`).then(data => setRatingsDetails(data?.data))
  }, [])

  const userId = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))._id : null


  return (
    <>
      <Container>
        <Row className="text-center">
          <Col xs={12} md={3}>
            {" "}
            <Card
              className="ant-card-head py-0"
              title={`${professorDetails?.firstName} ${professorDetails?.lastName}`}
              bordered={false}
            >
              <h6>Professor at {professorDetails?.institution?.universityname}</h6>
              <Statistic title="Overall Rating" value={parseInt(professorDetails?.overallRating)} suffix="/ 5" />

              <Row>
                <Col>
                  <Divider type="vertical" />
                  <Progress type="circle" percent={professorDetails?.recomendationRate} width={80} />{" "}
                  <p>Would take again?</p>
                </Col>
                <Col>
                  <Divider type="vertical" />
                  <Progress type="circle" percent={parseInt((professorDetails?.rateTeaching / 5) * 100)} width={80} />{" "}
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
               <Link to={`/rateProfessor/${id}`}>Rate Professor</Link>
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
                {Object.keys(ratingsDetails).length > 0 && ratingsDetails?.ratingDistribution.map(rating => {
                  const ratingsCount = ratingsDetails?.data.length
                  const { _id, totalRatings } = rating
                  const percentage = parseInt((totalRatings / ratingsCount) * 100)
                  return (
                    <>
                      <p className="m-0 text-start">{_id} Star {`(${totalRatings})`}</p>{" "}
                      <Progress
                        percent={percentage} />

                    </>
                  )
                })}
              </div>
            </DescriptionsItem>
          </Col>
        </Row>

        {Object.keys(ratingsDetails).length > 0 && ratingsDetails?.data?.map(data => {
          const {feedback,
            ratingGivenBy:{institution:{universityname},department:{name},_id},
            ratingGivenOn,isAttendanceMandatory,tags,examTypes,rateTeaching,
            isRecommended,isTextbookPreferred,isCourseTakenForCredit,overallRating
           } = data
          //  const tagsArray = tags[0].split("'").filter(e=>e.length > 3)
          //  const examFeedbackArray = examTypes[0].split("'").filter(e=>e.length > 3)
          return (
            <Row
              className="site-card-border-less-wrapper mt-5"
              style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
            >
              <Descriptions.Item label="Attendance">
                <p>{userId === _id && <Link to={`/editRating/${data?._id}`}>Edit</Link>}</p>
              </Descriptions.Item>
              <PageHeader
                className="site-page-header p-0"
                title={`USER${_id.slice(0,4)}`}
                subTitle={`Overall Rating ${overallRating}/5`}
                extra={[
                  <Button key="1" type="primary">
                    {new Date(ratingGivenOn).toLocaleDateString('en-CA',{ year: 'numeric', month: 'long', day: 'numeric' })}
                    {" "}{new Date(ratingGivenOn).toLocaleTimeString('en-CA',{ hour: "2-digit", minute: "2-digit"})}
                  </Button>,
                ]}
              >
                <Descriptions size="small">
                  <Descriptions.Item label="University">
                    {universityname}
                  </Descriptions.Item>
                  <Descriptions.Item label="Attendance">
                    {isAttendanceMandatory ? "Yes" : "No"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Would you recommend?">
                    {isRecommended ? "Yes" : "No"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Teaching">{rateTeaching}/5</Descriptions.Item>
                  <Descriptions.Item label="Textbook">{isTextbookPreferred ? "Yes" : "No" }</Descriptions.Item>
                  <Descriptions.Item label="Credit">{isCourseTakenForCredit ? "Yes" : "No"}</Descriptions.Item>

                  <Descriptions.Item label="Remarks">
                    
                  </Descriptions.Item>
                  <Descriptions.Item label="Type of exams">
                    {examTypes.map(type=>(<p>{type}</p>))}
                  </Descriptions.Item>
                  {tags.map(tag=>(<p>{tag}</p>))}
                  <Descriptions.Item
                    className="rounded p-3"
                    style={{ color: "#e4af2be0", backgroundColor: "#e4af2be0" }}
                  >
                    {feedback}
                  </Descriptions.Item>
                </Descriptions>
              </PageHeader>
            </Row>
          )
        })}

      </Container>
    </>
  )
};
export default Professor;

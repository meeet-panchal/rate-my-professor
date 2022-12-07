import { useState, useEffect } from "react";
import { Card } from "antd";
import { Descriptions, Statistic } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProfessorList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfessorInformation = ({ data }) => {
  const {
    firstName,
    lastName,
    department: { name },
    institution: { universityname, location },
    overallRating,
    recomendationRate,
    rateTeaching,
    _id,
  } = data;
  return (
    <Link to={`/professor/${_id}`}>
      <section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
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
              <Card
                className="ant-card-head py-0"
                title="Quality"
                bordered={false}
              >
                <Statistic
                  title="Overall Rating"
                  value={overallRating}
                  suffix="/ 5"
                />
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
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {firstName} {lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Department">
                    {name}
                  </Descriptions.Item>
                  <Descriptions.Item label="University">
                    {universityname}
                  </Descriptions.Item>
                  <Descriptions.Item label="Would take again">
                    {recomendationRate}
                  </Descriptions.Item>
                  <Descriptions.Item label="Level of difficulty">
                    {rateTeaching}
                  </Descriptions.Item>
                  <Descriptions.Item label="Location">
                    {location}
                  </Descriptions.Item>
                </Descriptions>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Link>
  );
};

const Professor = () => {
  const [professorList, setProfessorList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3600/user?isStudent=false")
      .then((data) => setProfessorList(data?.data));
  }, []);

  return professorList.map((data, key) => (
    <ProfessorInformation key={key} data={data} />
  ));
};
export default Professor;

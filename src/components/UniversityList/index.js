import { useState, useEffect } from "react";
import { Card } from "antd";
import { Descriptions, Statistic } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../ProfessorList/ProfessorList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const UniversityInformation = ({ data }) => {
  const {
    location,
    universityname,
    overallRating,
    reputation,
    facilities,
    _id,
  } = data;
  return (
    <Link to={`/university/${_id}`}>
      <section class="relative z-10 overflow-hidden bg-white py-4">
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
                  value={parseFloat(overallRating).toFixed(1)}
                  suffix=" / 5"
                />
              </Card>
            </Col>
            <Col
              xs={12}
              md={9}
              style={{ backgroundColor: "#dcdcdc", padding: "20px" }}
            >
              <Row className="">
                <Descriptions size="small">
                  <Descriptions.Item
                    label="Name"
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {universityname}
                  </Descriptions.Item>
                  <Descriptions.Item label="Location">
                    {location}
                  </Descriptions.Item>
                  <Descriptions.Item label="Reputation">
                    {parseFloat(reputation).toFixed(1)} / 5
                  </Descriptions.Item>
                  <Descriptions.Item label="Facilities">
                    {parseFloat(facilities).toFixed(1)} / 5
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

const Universities = () => {
  const [universityList, setUniversityList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3600/university")
      .then((data) => setUniversityList(data?.data));
  }, []);

  return universityList.map((data, key) => (
    <UniversityInformation key={key} data={data} />
  ));
};
export default Universities;

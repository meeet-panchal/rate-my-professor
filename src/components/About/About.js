import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../App.css';
import { H1,H3 } from '../../styleComponents'

function AboutUs() {
  return (
    <div className="App">
      <Container>
        <H1>About Us</H1>

        <div className="container">
          <img alt="about" src={"/images/about.jpg"} style={{ width: "100%", height: "90vh" }} />
          <div className="container">
            <p>Rate My Professors is the largest online destination for professor ratings. Users have added more than 19 million ratings, 1.7 million professors and over 7,500 schools to Rate My Professors. User-generated content makes Rate My Professors the highest trafficked site for quickly researching and rating professors, colleges and universities across the United States, Canada and the United Kingdom. More than 4 million college students each month are using Rate My Professors – join the fun!

              Students can comment on and rate their school as well, by visiting their school's Rate My Professors page.

              Rate My Professors is built for college students. Choosing the best courses and professors is a rite of passage for every student, and connecting with peers on the site has become a key way for millions of students to navigate this process. The site does what students have been doing forever - checking in with each other – their friends, their brothers, their sisters, their classNamemates – to figure out who's a great professor and who's one you might want to avoid.</p>
          </div>

        </div>

        <H1>Our Features</H1>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img alt="like" src={"/images/like.jpg"} style={{ width: "100%" }} />
              <div className="">
                <H3>LIKE OR DISLIKE</H3>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img alt="university" src={"/images/uni.jpg"} style={{ width: "100%" }} />
              <div className="">
                <H3>UNIVERSITIES</H3>

              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img alt="update" src={"/images/update.jpg"} style={{ width: "100%" }} />
              <div className="">
                <H3>UPDATE RATINGS</H3>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>

  );
}

export default AboutUs;

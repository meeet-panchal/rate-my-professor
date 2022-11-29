import { BsFillEmojiLaughingFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiAngryFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Paragraph, H1, H3 } from "../../styleComponents";


const Home = () => {
  return (
    <div className="App">
      <section className="header">

        <div className="text-box">
          <H1>
            <BsFillEmojiLaughingFill></BsFillEmojiLaughingFill>{" "}
            <BsFillEmojiNeutralFill></BsFillEmojiNeutralFill>{" "}
            <BsFillEmojiFrownFill></BsFillEmojiFrownFill>{" "}
            <BsFillEmojiHeartEyesFill></BsFillEmojiHeartEyesFill>{" "}
            <BsFillEmojiAngryFill></BsFillEmojiAngryFill>
          </H1>

          <Paragraph>
            Give 5 Star rating to ypur professor. Because you are learning at
            your college for pursue your career in better direct.<br></br>
            But they are struggling more to provide you better education.
            <br></br>
            Just say thank you to them by providing ratings here.
          </Paragraph>
          <a href="table.html" className="visit-btn">
            RATING
          </a>
        </div>
      </section>
      <Container>
        <H1>Start Rating Your Professor</H1>
        <p>
          Rate your professors anonymously and provide your valuable feedbacks
          that could help.<br></br>
          Students around the world to choose their universities based on their
          ratings.
        </p>

        <H1>Professors</H1>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/prof1.jpg"} style={{ width: "100%" }} />
              <div className="container">
                <H3>Jane Doe</H3>
                <p className="title">Information Technology</p>
                <p>
                  Expertise:database systems; data quality; data privacy; data
                  analytics; information extraction; text mining.ssociate
                  Professor in the Department of Computing and Software.
                </p>
                <p>Jane@gmail.com</p>
                <p>
                  <button className="visit-btn">Give Ratings</button>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/prof2.jpg"} style={{ width: "100%" }} />
              <div className="container">
                <H3>Mike Ross</H3>
                <p className="title">Civil & Architecture</p>
                <p>
                  I am an assistant professor at McMaster University. Before
                  joining McMaster University, I was a Principal Researcher at
                  Huawei Technologies Canada, Co., Ltd and research.
                </p>
                <p>mike@gmail.com</p>
                <p>
                  <button className="visit-btn">Give Ratings</button>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/prof3.jpg"} style={{ width: "100%" }} />
              <div className="container">
                <H3>John Doe</H3>
                <p className="title">Fluid Chemical</p>
                <p>
                  Currently, my focus is on the development of scalable
                  resilient systems that can manage data and processing complex
                  transactions, while providing strong guarantees.
                </p>
                <p>john@gmail.com</p>
                <p>
                  <button className="visit-btn">Give Ratings</button>
                </p>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Home;

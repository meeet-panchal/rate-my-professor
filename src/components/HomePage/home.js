import {
  BsFillEmojiLaughingFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Paragraph, H1, H3 } from "../../styleComponents";

const Home = () => {
  return (
    <div className="App">
      <section className="header">
        <div className="text-box">
          <H1 style={{ display: "flex", justifyContent: "center" }}>
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

        {/* <div className="row">
    <div className="column">
      <div className="card">
        <img src={"/images/prof1.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>Jane Doe</H3>
          <p className="title">Information Technology</p>
          <p>
            Expertise:database systems; data quality; data privacy; data
            analytics; information extraction; text mining.ssociate
            Professor in the Department of Computing and Software, Faculty
            of Engineering. Her research interests are broadly in the area
            of data management, with a focus on data quality, data
            analytics, data privacy, text mining, and information
            extraction. She has worked at IBM Global Services.
          </p>
          <p>Jane@gmail.com</p>
          <p>
            <button className="button">Give Ratings</button>
          </p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src={"/images/prof2.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>Mike Ross</H3>
          <p className="title">Civil & Architecture</p>
          <p>
            I am an assistant professor at McMaster University. Before
            joining McMaster University, I was a Principal Researcher at
            Huawei Technologies Canada, Co., Ltd. During 2015~2018, I
            successfully led 7+ research projects as a Postdoctoral Fellow
            at Simon Fraser University. I obtained my Ph.D. degree in
            Computer Science from University of Chinese Academy of
            Sciences in June 2015.
          </p>
          <p>mike@gmail.com</p>
          <p>
            <button className="button">Give Ratings</button>
          </p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src={"/images/prof3.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>John Doe</H3>
          <p className="title">Fluid Chemical</p>
          <p>
            Currently, my focus is on the development of scalable
            resilient systems that can manage data and processing complex
            transactions, while providing strong guarantees toward users
            in the presence of faulty behavior (e.g., hardware failures,
            software failures, and malicious attacks). Furthermore, I work
            on database theory, on semi-structured data with a main focus
            on graph databases.
          </p>
          <p>john@gmail.com</p>
          <p>
            <button className="button">Give Ratings</button>
          </p>
        </div>
      </div>
    </div>
  </div> */}

        <H1>Get In Touch</H1>
        <div className="contact-section">
          <div className="contact-form">
            <form className="contact" action="" method="post">
              <input
                type="text"
                name="name"
                className="text-box1"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="text-box1"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <input
                type="submit"
                name="submit"
                className="send-btn"
                value="Send"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

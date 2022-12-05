import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeader from "../MainHeader";
import "../../App.css";
import "../../components/Contact/contact.css";
import {
  Button,
  Paragraph,
  H1,
  UL,
  LI,
  A,
  H2,
  H3,
  H4,
} from "../../styleComponents";
import {
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillEmojiLaughingFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiAngryFill,
  BsFillAlarmFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsBuilding,
  BsFacebook,
} from "react-icons/bs";

function ContactUs() {
  return (
    <div className="App">
      <section className="header">
        <nav>
          <div className="logo">
            <a href="index.html">
              <span id="part1">Rate My</span>
              <span id="part2"> Professor</span>
            </a>
          </div>
          <MainHeader />
        </nav>

        <div className="text-box">
          <H1>
            <BsFillEmojiLaughingFill /> <BsFillEmojiNeutralFill />{" "}
            <BsFillEmojiFrownFill /> <BsFillEmojiHeartEyesFill />{" "}
            <BsFillEmojiAngryFill />
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
        <H1>Contact Us</H1>
        <Row>
          <Col>
            <div className="container">
              <img
                src={"/images/contact.jpg"}
                style={{ width: "100%", height: "60vh" }}
              />
              <p></p>
              <div className="container">
                <form action="">
                  <div className="row">
                    <div className="col-25">
                      <label for="fname"> Name</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="lname"> Email</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="subject">Subject</label>
                    </div>
                    <div className="col-75">
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        style={{ height: "200px" }}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-flex justify-content-center">
                      <input type="submit" value="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>

        <p>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371436.0067120141!2d-80.66913891776352!3d43.3384574902762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9018e9e89adf%3A0x2043c24369ede07e!2sConestoga%20College%20Kitchener%20-%20Doon%20Campus!5e0!3m2!1sen!2sca!4v1668757015009!5m2!1sen!2sca"
            style={{
              border: "0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </p>
      </Container>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Rate <span>MyProfessor</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Home</a>

            <a href="#">Rating</a>

            <a href="#">Universities</a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name"> Rate My Professor © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p> 299 Doon Valley Drive. Kitchener, Ontario N2G 4M4</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1 8320650059</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">ratemyprofessor@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
              <BsFacebook></BsFacebook>
            </a>

            <a href="#">
              <i className="fa fa-twitter"></i>
              <BsTwitter></BsTwitter>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
              <BsLinkedin></BsLinkedin>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
              <BsGithub></BsGithub>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;

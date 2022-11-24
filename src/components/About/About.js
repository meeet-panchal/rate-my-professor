
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeader from "../MainHeader";
import '../../App.css';
import { Button, Paragraph, H1, UL, LI, A, H2, H3, H4 } from '../../styleComponents'
import { BsGithub, BsFillBookmarkStarFill, BsFillStarFill, BsTwitter, BsInstagram, BsLinkedin, BsFillEmojiLaughingFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiAngryFill, BsFillAlarmFill, BsFillEnvelopeFill, BsFillTelephoneFill, BsBuilding, BsFacebook } from "react-icons/bs";

function AboutUs() {
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
            <BsFillEmojiLaughingFill />{" "}
            <BsFillEmojiNeutralFill />{" "}
            <BsFillEmojiFrownFill />{" "}
            <BsFillEmojiHeartEyesFill />{" "}
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


        <H1>About Us</H1>
       
            <div className="container">
              <img src={"/images/about.jpg"} style={{ width: "100%", height: "90vh" }} />
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
              <img src={"/images/like.jpg"} style={{ width: "100%" }} />
              <div className="">
                <H3>LIKE OR DISLIKE</H3>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/uni.jpg"}  style={{ width: "100%" }} />
              <div className="">
                <H3>UNIVERSITIES</H3>
                
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/update.jpg"} style={{ width: "100%" }} />
              <div className="">
                <H3>UPDATE RATINGS</H3>
              </div>
            </div>
          </Col>
        </Row>
       
      </Container>
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3>Rate <span>MyProfessor</span></h3>

          <p className="footer-links">
            <a href="#" className="link-1">Home</a>

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
            <p><a href="mailto:support@company.com">ratemyprofessor@gmail.com</a></p>
          </div>

        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">

            <a href="#"><i className="fa fa-facebook"></i><BsFacebook></BsFacebook></a>

            <a href="#"><i className="fa fa-twitter"></i><BsTwitter></BsTwitter></a>
            <a href="#"><i className="fa fa-linkedin"></i><BsLinkedin></BsLinkedin></a>
            <a href="#"><i className="fa fa-github"></i><BsGithub></BsGithub></a>

          </div>

        </div>

      </footer>

    </div>

  );
}

export default AboutUs;

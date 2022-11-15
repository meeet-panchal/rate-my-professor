
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeader from "./components/MainHeader";
import './App.css';
import { Button, Paragraph, H1, UL, LI, A, H2, H3, H4 } from './styleComponents'
import {BsFillBookmarkStarFill,  BsFillStarFill, BsTwitter, BsInstagram, BsLinkedin, BsFillEmojiLaughingFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiAngryFill, BsFillAlarmFill, BsFillEnvelopeFill, BsFillTelephoneFill, BsBuilding, BsFacebook} from "react-icons/bs";

function AboutUs() {
  return (
    <div className="App">
    <section className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            <H2>
              <span id="part1">Rate My</span>
              <span id="part2"> Professor</span>
            </H2>
          </a>
        </div>
        <MainHeader/>
      </nav>

      <div className="text-box">
        <H1>
          <BsFillEmojiLaughingFill/>{" "}
          <BsFillEmojiNeutralFill/>{" "}
          <BsFillEmojiFrownFill/>{" "}
          <BsFillEmojiHeartEyesFill/>{" "}
          <BsFillEmojiAngryFill/>
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
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="card">
            <img src={"/images/about.jpg"} style={{ width: "100%", height: "90vh" }} />
            <div className="container">
             <Paragraph>Rate My Professors is the largest online destination for professor ratings. Users have added more than 19 million ratings, 1.7 million professors and over 7,500 schools to Rate My Professors. User-generated content makes Rate My Professors the highest trafficked site for quickly researching and rating professors, colleges and universities across the United States, Canada and the United Kingdom. More than 4 million college students each month are using Rate My Professors – join the fun!

Students can comment on and rate their school as well, by visiting their school's Rate My Professors page.

Rate My Professors is built for college students. Choosing the best courses and professors is a rite of passage for every student, and connecting with peers on the site has become a key way for millions of students to navigate this process. The site does what students have been doing forever - checking in with each other – their friends, their brothers, their sisters, their classNamemates – to figure out who's a great professor and who's one you might want to avoid.</Paragraph>
            </div>
          </div>
        </Col>
       
      
      </Row>

     

      <H1>Our Features</H1>
      <div className="row">
    <div className="column">
      <div className="card">
        <img src={"/images/like.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>LIKE OR DISLIKE</H3>
          
          
          
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src={"/images/uni.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>UNIVERSITIES</H3>
          
          
          
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src={"/images/update.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>EDIT YOUR RATINGS</H3>
         
          
         
        </div>
      </div>
    </div>
  </div>
      <footer id="footer">
        <div className="footer-top">
          <div className="row">
            <div className="links">
              <div className="address">
                <h3>Rate My Professor</h3>
                <ul>
                  <li>Golden Square</li>
                  <li> Center parle poin,Surat</li>
                  <li>Phone: +91 9016646464</li>
                  <li>Email: info@example.com</li>
                </ul>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <BsTwitter></BsTwitter>
                  </a>
                  <a href="#" className="facebook">
                    <BsFacebook></BsFacebook>
                  </a>
                  <a href="#" className="instagram">
                    <BsInstagram></BsInstagram>{" "}
                  </a>
                  <a href="#" className="linkedin">
                    <BsLinkedin></BsLinkedin>
                  </a>
                </div>
                <div className="links">
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>

                    <form action="" method="post">
                      <input type="email" name="email" />
                      <input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              &copy; Copyright <span>Rate My Professor</span>. All Rights
              Reserved
            </div>
          </div>
        </div>
      </footer>
    </Container>
  </div>
  
  );
}

export default AboutUs;

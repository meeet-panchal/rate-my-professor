import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../App.css';
import '../../components/Contact/contact.css'
import {  H1 } from '../../styleComponents'

function ContactUs() {
    return (
        <div className="App">
            <Container>


                <H1>Contact Us</H1>
                <Row>
                    <Col>
                        <div className="container">
                            <img alt="contact" src={"/images/contact.jpg"} style={{ width: "100%", height: "60vh" }} />
                            <p></p>
                            <div className="container">
                                <form action="">
                                    <div className="row">
                                        <div className="col-25">
                                            <label for="fname"> Name</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label for="lname"> Email</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="email" name="email" placeholder="Enter your Email" required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-25">
                                            <label for="subject">Subject</label>
                                        </div>
                                        <div className="col-75">
                                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} required></textarea>
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

                <p><iframe title="maps" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371436.0067120141!2d-80.66913891776352!3d43.3384574902762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9018e9e89adf%3A0x2043c24369ede07e!2sConestoga%20College%20Kitchener%20-%20Doon%20Campus!5e0!3m2!1sen!2sca!4v1668757015009!5m2!1sen!2sca" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe></p>
            </Container>
        </div>

    );
}

export default ContactUs;

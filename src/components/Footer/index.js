import { BsGithub, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Rate <span>MyProfessor</span></h3>

                <p className="footer-company-name"> Rate My Professor © 2022</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p> 299 Doon Valley Drive. Kitchener, Ontario N2G 4M4</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 (549) 444-4444</p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    We are a bunch of developers who wanted to contribute back to where we came from.
                </p>

             <div className="footer-icons">
             <a href="https://google.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i><BsFacebook/></a>             

               {/*      <a href="#"><i className="fa fa-facebook"></i><BsFacebook></BsFacebook></a>
                    <a href="#"><i className="fa fa-twitter"></i><BsTwitter></BsTwitter></a>
                    <a href="#"><i className="fa fa-linkedin"></i><BsLinkedin></BsLinkedin></a>
                    <a href="#"><i className="fa fa-github"></i><BsGithub></BsGithub></a> */}

                </div> 

            </div>

        </footer>
    )
}

export default Footer
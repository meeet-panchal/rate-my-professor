import {
  BsFillEmojiLaughingFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";

import { Paragraph, H1} from "../../styleComponents";

const Home = () => {
  return (
    <div className="App">
      <section className="header">
       <div className="banner">.
          <H1 className="emoji" aria-label="heading" >.
            <BsFillEmojiLaughingFill></BsFillEmojiLaughingFill>
            <BsFillEmojiNeutralFill></BsFillEmojiNeutralFill>
            <BsFillEmojiFrownFill></BsFillEmojiFrownFill>
            <BsFillEmojiHeartEyesFill></BsFillEmojiHeartEyesFill>
            <BsFillEmojiAngryFill></BsFillEmojiAngryFill>
          </H1>

          <Paragraph className="bannerpara">
            Give 5 Star rating to your professor. Because you are learning at
            your college for pursue your career in better direct.<br></br>
            But they are struggling more to provide you better education.
            <br></br>
            Just say thank you to them by providing ratings here.
          </Paragraph>
         
        </div>
      </section>
    
        <H1>Start Rating Your Professor</H1>
        <p className="para">
          Rate your professors anonymously and provide your valuable feedbacks
          that could help.<br></br>
          Students around the world to choose their universities based on their
          ratings.
        </p>
       
        <H1>About Team</H1>
        <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">

            <div className="row">


               <div className="col-md-4 col-sm-12">
               <div className="member">
                    <img src="images/meet.jpeg" className="img-fluid" alt=""/>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Meet Panchal</h4>
                            <span>REACT Developer</span>
                        </div>
                       
                    </div>
                </div>
                </div>


                <div className="col-md-4 col-sm-12">
                <div className="member">
                    <img src="images/saloni.jpg" className="img-fluid" alt=""/>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Saloni Parmar</h4>
                            <span>UI developer</span>
                        </div>
                        
                    </div>
                </div>
                </div>



               <div className="col-md-4 col-sm-12">
               <div className="member">
                    <img src="images/anoop.jpeg" className="img-fluid" alt=""/>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Anoop Vanktesh</h4>
                            <span>Frontend developer</span>
                        </div>
                       
                    </div>
                </div>

               </div>

            </div>

        </div>
    </section>
   
     
    </div>
  );
};

export default Home;

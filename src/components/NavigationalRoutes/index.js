import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/home";
import UniversityForm from "../Universities/universities";
import UniversityDetails from '../University';
import ProfessorList from "../ProfessorList/ProfessorList";
import Professor from "../ProfessorDetails/ProfessorDetails";
import Ratings from "../Ratings/ratings";
import RegisterationForm from "../UserDetails/UserRegisteration";
import AboutSection from "../NewAboutUs/newAbout";
import ContactSection from "../NewContact/newContact";
import Donation from "../Donation";
import Login from "../Login/login";
import EditRating from "../EditRating";
import UniversityList from '../UniversityList'
import ProtectedRoutes, { StudentRoutes } from "../ProtectedRoutes";

const NavigationalRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/about-us" element={<AboutSection />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/register" element={<RegisterationForm />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route element={<ProtectedRoutes />}>
                <Route element={<StudentRoutes />}>
                    <Route path="/professors" element={<ProfessorList />} />
                    <Route path="/professor/:id" element={<Professor />} />
                    <Route path="/rateProfessor/:id" element={<Ratings />} />
                    <Route path="/editRating/:id" element={<EditRating />} />
                    <Route path="/universities" element={<UniversityList/>}/>
                    <Route path="/university/:id" element={<UniversityDetails/>}/>
                    <Route path="/rateUniversity/:id" element={<UniversityForm/>} />
                    {/* <Route path="/editUniversityRating/:id" element={} /> */}
                </Route>
            </Route>
            {/* <Route path="/ratings" element={<Ratings />} /> */}
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default NavigationalRoutes;

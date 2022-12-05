import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/home";
import Universities from "../Universities/universities";
import ProfessorList from "../ProfessorList/ProfessorList";
import Professor from "../ProfessorDetails/ProfessorDetails";
import Ratings from "../Ratings/ratings";
import RegisterationForm from "../UserDetails/UserRegisteration";
import AboutSection from "../NewAboutUs/newAbout";
import ContactSection from "../NewContact/newContact";
import Donation from "../Donation";
import Login from "../Login/login";
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
          <Route path="/universities" element={<Universities />} />
          <Route path="/professors" element={<ProfessorList />} />
          <Route path="/professorlist" element={<Professor />} />
        </Route>
      </Route>
      {/* <Route path="/ratings" element={<Ratings />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default NavigationalRoutes;

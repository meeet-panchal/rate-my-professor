import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/home";
import Universities from "../Universities/universities";
import ProfessorList from "../ProfessorList/ProfessorList";
import Professor from "../ProfessorDetails/ProfessorDetails";
import RegisterationForm from "../UserDetails/UserRegisteration";
import AboutUs from "../About/About";
import ContactUs from "../Contact/contact";
import Donation from "../Donation";
import Login from "../Login/login";
import ProtectedRoutes, { StudentRoutes } from '../ProtectedRoutes'

const NavigationalRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/register" element={<RegisterationForm />} />
            <Route element={<ProtectedRoutes />}>
                <Route element={<StudentRoutes/>}>
                    <Route path="/universities" element={<Universities />} />
                    <Route path="/professors" element={<Professor />} />
                    <Route path="/professorlist" element={<ProfessorList />} />
                </Route>
            </Route>
            {/* <Route path="/ratings" element={<Ratings />} /> */}
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default NavigationalRoutes
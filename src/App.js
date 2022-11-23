import "./App.css";
import RegisterationForm from "./components/UserDetails/UserRegisteration";
import Universities from "./components/Universities/universities";
import Home from "./components/HomePage/home";
import AboutUs from "./components/About/About";
import Ratings from "./components/Ratings/ratings";
import ContactUs from "./components/Contact/contact";
import Professor from "./components/ProfessorDetails/ProfessorDetails";
import { Routes, Route } from "react-router-dom";
import Donation from "./components/Donation";
import Login from "./components/Login/login";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<RegisterationForm />} />
      <Route path="/universities" element={<Universities />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/professors" element={<Professor />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/login" element={<Login />} />

      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;

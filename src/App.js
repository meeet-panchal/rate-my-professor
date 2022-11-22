import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterationForm from "./components/UserDetails/UserRegisteration";
import Home from "./components/HomePage/home";
import AboutUs from "./components/About/About";
import Ratings from "./components/Ratings/ratings";
import Professor from "./components/ProfessorDetails/ProfessorDetails";
import { Routes, Route } from "react-router-dom";
import Donation from "./components/Donation";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<RegisterationForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/professors" element={<Professor />} />
      <Route path="/donation" element={<Donation />} />

      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;

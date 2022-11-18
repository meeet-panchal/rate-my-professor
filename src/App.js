import "./App.css";
import RegisterationForm from "./components/UserDetails/UserRegisteration";
import Home from "./components/HomePage/home";
import Ratings from "./components/Ratings/ratings";
import Professor from "./components/ProfessorDetails/ProfessorDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<RegisterationForm />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/professors" element={<Professor />} />

      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;

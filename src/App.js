import "./App.css";
import RegisterationForm from "./components/UserDetails/UserRegisteration";
import Home from "./components/HomePage/home";
import AboutUs from "./components/About/About"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<RegisterationForm />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;

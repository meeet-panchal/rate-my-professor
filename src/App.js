import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import NavigationalRoutes from "./components/NavigationalRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <NavigationalRoutes />
      <Footer />
    </Router>
  );
}

export default App;

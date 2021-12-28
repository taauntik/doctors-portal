import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// internal imports
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;

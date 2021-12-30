import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// internal imports
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";
import AllPatients from "./pages/Dashboard/AllPatients/AllPatients";
import DashboardAppointment from "./pages/Dashboard/DashboardAppointment/DashboardAppointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/appointment" element={<DashboardAppointment />} />
        <Route path="/dashboard/allpatients" element={<AllPatients />} />
      </Routes>
    </Router>
  );
}

export default App;

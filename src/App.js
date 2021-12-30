import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// internal imports
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";
import AllPatients from "./pages/Dashboard/AllPatients/AllPatients";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardAppointment from "./pages/Dashboard/DashboardAppointment/DashboardAppointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export const AppContext = createContext();

function App() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointment/get_all_appointment")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data.data);
      })
      .catch((err) => console.log(err));
  }, [appointments]);
  return (
    <AppContext.Provider value={{ appointments }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/appointment"
            element={<DashboardAppointment />}
          />
          <Route path="/dashboard/allpatients" element={<AllPatients />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

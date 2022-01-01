import React from "react";
import { useLocation, Outlet } from "react-router-dom";

// internal imports
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import AddUser from "./AddUser/AddUser";
import AllPatients from "./AllPatients/AllPatients";
import DashboardAppointment from "./DashboardAppointment/DashboardAppointment";
import DashboardHome from "./DashboardHome/DashboardHome";

function Dashboard() {
  const location = useLocation();
  const path = location.pathname;
  const title =
    path === ("/dashboard/appointment" || "/dashboard/appointment")
      ? "Appointment"
      : path === ("/dashboard" || path === "/dashboard/")
      ? "Dashboard"
      : path === ("/dashboard/allpatients" || "/dashboard/allpatients/")
      ? "All Patients"
      : path === ("/dashboard/adduser" || path === "/dashboard/adduser/")
      ? "Add User"
      : null;

  return (
    <Sidebar title={title}>
      {path === "Appointment" ? (
        <DashboardAppointment />
      ) : path === "Dashboard" ? (
        <DashboardHome />
      ) : path === "All Patients" ? (
        <AllPatients />
      ) : path === "Add User" ? (
        <AddUser />
      ) : null}
      <Outlet />
    </Sidebar>
  );
}

export default Dashboard;

import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../../App";
import DashbaordAppointmentTable from "../../../components/Dashboard/DashboardAppointmentTable/DashbaordAppointmentTable";

// internal imports
import StatisticsCard from "../../../components/Dashboard/StatisticsCard/StatisticsCard";

function DashboardHome() {
  const ContextData = useContext(AppContext);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [todaysAppointments, setTodaysAppointments] = useState([]);

  useEffect(() => {
    setPendingAppointments((prevState) =>
      ContextData.appointments.length > 0
        ? ContextData.appointments.filter(
            (appointment) => appointment.status === "Pending"
          )
        : []
    );
    setTodaysAppointments((prevState) =>
      ContextData.appointments.length > 0
        ? ContextData.appointments.filter(
            (appointment) =>
              appointment.date ===
              new Date(new Date().toLocaleDateString()).toISOString()
          )
        : []
    );
  }, [ContextData.appointments]);

  const statisticsData = [
    {
      id: "klsjdfh2",
      htmlData: `
          <p class="counts">${
            pendingAppointments.length >= 10
              ? pendingAppointments.length
              : `0${pendingAppointments.length}`
          }</p>
          <p class="title">Pending <br />Appointments</p>
      `,
      bgcolor: "#e65a6d",
      color: "white",
    },
    {
      id: "kir309wflks",
      htmlData: `
      <p class="counts">${
        todaysAppointments.length >= 10
          ? todaysAppointments.length
          : `0${todaysAppointments.length}`
      }</p>
      <p class="title">Today's <br />Appointments</p>
      `,
      bgcolor: "#3da5f4",
      color: "white",
    },
    {
      id: "o9023kldsfjsi",
      htmlData: `
      <p class="counts">${
        ContextData.appointments.length >= 10
          ? ContextData.appointments.length
          : `0${ContextData.appointments.length}`
      }</p>
      <p class="title">Total <br />Appointments</p>
      `,
      bgcolor: "#00c689 ",
      color: "white",
    },
    {
      id: "0923klsfoiwer",
      htmlData: `
      <p class="counts">${
        ContextData.appointments.length >= 10
          ? ContextData.appointments.length
          : `0${ContextData.appointments.length}`
      }</p>
      <p class="title">Total <br />Patients</p>
      `,
      bgcolor: "#fda006",
      color: "white",
    },
  ];
  // console.log(location.pathname);

  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {statisticsData.map(({ id, htmlData, bgcolor, color }) => (
          <StatisticsCard
            key={id}
            bgcolor={bgcolor}
            htmlData={htmlData}
            color={color}
          />
        ))}
      </div>
      <div>
        <DashbaordAppointmentTable appointments={ContextData.appointments} />
      </div>
    </div>
  );
}

export default DashboardHome;

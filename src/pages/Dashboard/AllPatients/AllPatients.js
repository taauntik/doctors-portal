import React, { useEffect, useState } from "react";
import PatientsDataTable from "../../../components/Dashboard/PatientsDataTable/PatientsDataTable";

// internal imports
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";

function AllPatients() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointment/get_all_appointment")
      .then((res) => res.json())
      .then((data) => setPatients(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Sidebar title="Patients">
        <PatientsDataTable patients={patients} />
      </Sidebar>
    </div>
  );
}

export default AllPatients;

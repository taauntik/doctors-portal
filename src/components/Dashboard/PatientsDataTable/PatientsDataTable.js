import React from "react";

function PatientsDataTable({ patients }) {
  return (
    <div className="border container p-3 table-container">
      <div className="d-flex justify-content-between">
        <p
          style={{ fontSize: "16px", fontWeight: "bold" }}
          className="primary-text"
        >
          All Patients
        </p>
      </div>
      <br />
      <br />
      <table className="mytable">
        <thead className="mytable__head">
          <tr className="mytable__cols">
            <th className="mytable__col">Sr.No</th>
            <th className="mytable__col">Name</th>
            <th className="mytable__col">Gender</th>
            <th className="mytable__col">Age</th>
            <th className="mytable__col">Weight</th>
            <th className="mytable__col">Contact</th>
            <th className="mytable__col">Email Address</th>
          </tr>
        </thead>
        <tbody className="mytable__body">
          {patients.map(
            ({ _id, name, gender, age, weight, phone, email }, i) => (
              <tr key={_id} className="mytable__cols">
                <td className="mytable__col">{i + 1}</td>
                <td className="mytable__col">{name}</td>
                <td className="mytable__col">{gender}</td>
                <td className="mytable__col">{age}</td>
                <td className="mytable__col">{weight}</td>
                <td className="mytable__col">{phone}</td>
                <td className="mytable__col">{email}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsDataTable;

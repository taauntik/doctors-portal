import React from "react";
import Appointment from "../../components/Home/Appointment/Appointment";
import Featured from "../../components/Home/Featured/Featured";

// internal imports
import Header from "../../components/Home/Header/Header";
import Services from "../../components/Home/Services/Services";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Featured />
      <Appointment />
    </>
  );
}

export default Home;

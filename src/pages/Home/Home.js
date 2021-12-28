import React, { useEffect, useState } from "react";

// internal imports
import Header from "../../components/Home/Header/Header";
import Services from "../../components/Home/Services/Services";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Appointment from "../../components/Home/Appointment/Appointment";
import Featured from "../../components/Home/Featured/Featured";
import Blogs from "../../components/Home/Blogs/Blogs";
import Doctors from "../../components/Home/Doctors/Doctors";
import Contact from "../../components/Home/Contact/Contact";
import Footer from "../../components/common/Footer/Footer";
import "../../styles/Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [showFloatBtn, setShowFloatBtn] = useState(false);
  useEffect(() => {
    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      setShowFloatBtn(!(this.oldScroll > this.scrollY));
      this.oldScroll = this.scrollY;
    };
  }, []);
  return (
    <>
      <Header />
      <Services />
      <Featured />
      <Appointment />
      <Testimonial />
      <Blogs />
      <Doctors />
      <Contact />
      <Footer />
      {showFloatBtn ? (
        <div className="float-btn" onClick={() => window.scroll(0, 0)}>
          <FontAwesomeIcon className="float-icon" icon={faArrowUp} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;

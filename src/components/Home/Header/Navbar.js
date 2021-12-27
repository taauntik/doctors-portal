import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-3 container">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" aria-current="page" href="#">
                Dental Services
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-white" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-white" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

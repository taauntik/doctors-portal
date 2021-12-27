import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light pt-3">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item ms-5">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" aria-current="page" href="#">
                Dental Services
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link text-white" href="#">
                Reviews
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link text-white" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link text-white" href="#">
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

import Link from "next/link";

import React from "react";

function Header() {
  
  function handleClickMenuItems() {
    $(".navbar-toggler").addClass("collapsed").attr("aria-expanded", "false");
    $(".navbar-collapse").removeClass("show");
  }

  return (
    <header className="header-area background-header header-sticky z-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav
              id="navbar"
              className="navbar fixed-top navbar-expand-md main-nav"
            >
              <div className="container-fluid">
                <Link className="navbar-brand logo" href="/">
                  <h1>Scholar</h1>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div></div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <ul className="navbar-nav nav">
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link
                        href="/#services"
                        className="nav-link active pt-md-0"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link
                        href="/latest-courses"
                        className=" nav-link active pt-md-0"
                      >
                        Courses
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link href="/#team" className=" nav-link active pt-md-0">
                        Team
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link href="/#facts" className=" nav-link active pt-md-0">
                        Facts
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link
                        href="/#testimonials"
                        className=" nav-link active pt-md-0"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link
                        href="/events"
                        className=" nav-link active pt-md-0"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item" onClick={handleClickMenuItems}>
                      <Link
                        href="/#contact"
                        className=" nav-link active pt-md-0"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import Link from "next/link";
import React, { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <header className="header-area header-sticky z-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md main-nav">
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
                  <div className="search-input">
                    <form id="search" action="#">
                      <input
                        type="search"
                        placeholder="Type Something"
                        id="searchText"
                        name="searchKeyword"
                      />
                      <i className="fa fa-search"></i>
                    </form>
                  </div>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                  >
                    <ul className="navbar-nav nav">
                      <li className="scroll-to-section nav-item">
                        <a href="#top" className="nav-link active">
                          Home
                        </a>
                      </li>
                      <li className="scroll-to-section nav-item">
                        <a href="#services" className="nav-link">Services</a>
                      </li>
                      <li className="scroll-to-section nav-item">
                        <a href="#courses" className=" nav-link">Courses</a>
                      </li>
                      <li className="scroll-to-section nav-item">
                        <a href="#team" className=" nav-link">Team</a>
                      </li>
                     
                    </ul>
                    
                  </div>
                </div>
              </nav>
              {/* <nav className="main-nav">
                <a href="index.html" className="logo">
                  <h1>Scholar</h1>
                </a>

                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#team">Team</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#events">Events</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Register Now!</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav> */}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;

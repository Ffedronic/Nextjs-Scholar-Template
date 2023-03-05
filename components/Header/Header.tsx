import Link from "next/link";

import React from "react";

function Header() {
  
  return (
    <header className="header-area header-sticky z-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav id="navbar" className="navbar fixed-top navbar-expand-md main-nav">
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
                  className="collapse navbar-collapse ms-md-5"
                  id="navbarNavAltMarkup"
                >
                  <ul className="navbar-nav nav">
                    <li className="scroll-to-section nav-item">
                      <Link href="#top" className="nav-link active pt-md-0">
                        Home
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item">
                      <Link
                        href="#services"
                        className="nav-link active pt-md-0"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item">
                      <Link
                        href="#courses"
                        className=" nav-link active pt-md-0"
                      >
                        Courses
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item">
                      <Link href="#team" className=" nav-link active pt-md-0">
                        Team
                      </Link>
                    </li>
                    <li className="scroll-to-section nav-item">
                      <Link href="#facts" className=" nav-link active pt-md-0">
                        Facts
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

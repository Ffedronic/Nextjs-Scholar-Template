import React, { Fragment } from "react";

import Link from "next/link";

function MainBanner() {
  return (
    <Fragment>
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                id="carouselExampleControls"
                className="carousel slide mt-md-3 mt-lg-0"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner  rounded-5">
                  <div className="carousel-item active item item-1">
                    <div className="header-text">
                      <span className="category">Our Courses</span>
                      <h2>With Scholar Teachers, Everything Is Easier</h2>
                      <p>
                        Scholar is free CSS template designed by TemplateMo for
                        online educational related websites. This layout is
                        based on the famous Bootstrap v5.3.0 framework.
                      </p>
                      <div className="buttons">
                        <div className="main-button">
                          <Link href="#">Request Demo</Link>
                        </div>
                        <div className="icon-button">
                          <Link href="#">
                            <i className="fa fa-play"></i> What's Scholar?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item item item-2">
                    <div className="header-text">
                      <span className="category">Best Result</span>
                      <h2>Get the best result out of your effort</h2>
                      <p>
                        You are allowed to use this template for any educational
                        or commercial purpose. You are not allowed to
                        re-distribute the template ZIP file on any other
                        website.
                      </p>
                      <div className="buttons">
                        <div className="main-button">
                          <Link href="#">Request Demo</Link>
                        </div>
                        <div className="icon-button">
                          <Link href="#">
                            <i className="fa fa-play"></i> What's the best
                            result?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item item item-3">
                    <div className="header-text">
                      <span className="category">Online Learning</span>
                      <h2>Online Learning helps you save the time</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod temporious incididunt ut labore et dolore
                        magna aliqua suspendisse.
                      </p>
                      <div className="buttons">
                        <div className="main-button">
                          <Link href="#">Request Demo</Link>
                        </div>
                        <div className="icon-button">
                          <Link href="#">
                            <i className="fa fa-play"></i> What's Online Course?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainBanner;

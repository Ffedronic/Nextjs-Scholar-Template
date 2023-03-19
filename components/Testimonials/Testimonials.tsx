import SectionHeading from "@/lib/SectionHeading/SectionHeading";
import React, { Fragment } from "react";

function Testimonials() {
  return (
    <Fragment>
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <div className="row pt-5 d-lg-none">
            <div className="col-lg-12 text-center">
              <SectionHeading
                title="Testimonials"
                subtitle="What they say about us ?"
                description="  You can search free CSS templates on Google using different
                  keywords such as templatemo portfolio, templatemo gallery,
                  templatemo blue color, etc."
              />
            </div>
          </div>
          <div className="row mt-lg-5">
            <div className="col-lg-7">
              <div
                id="carouselTestimonials"
                className="carousel slide mt-md-3 mt-lg-0"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded-5">
                  <article className=" carousel-item item active">
                    <p>
                      “Please tell your friends or collegues about TemplateMo
                      website. Anyone can access the website to download free
                      templates. Thank you for visiting.”
                    </p>
                    <div className="author">
                      <img src="/images/testimonial-author.jpg" alt="" />
                      <span className="category">Full Stack Master</span>
                      <h4>Claude David</h4>
                    </div>
                  </article>
                  <article className="carousel-item item">
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravid.”
                    </p>
                    <div className="author">
                      <img src="/images/testimonial-author.jpg" alt="" />
                      <span className="category">UI Expert</span>
                      <h4>Thomas Jefferson</h4>
                    </div>
                  </article>
                  <article className="carousel-item item">
                    <p>
                      “Scholar is free website template provided by TemplateMo
                      for educational related websites. This CSS layout is based
                      on Bootstrap v5.3.0 framework.”
                    </p>
                    <div className="author">
                      <img src="/images/testimonial-author.jpg" alt="" />
                      <span className="category">Digital Animator</span>
                      <h4>Stella Blair</h4>
                    </div>
                  </article>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselTestimonials"
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
                  data-bs-target="#carouselTestimonials"
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
            <div className="col-lg-5 align-self-center d-none d-lg-block">
              <SectionHeading
                title="Testimonials"
                subtitle="What they say about us ?"
                description="  You can search free CSS templates on Google using different
                  keywords such as templatemo portfolio, templatemo gallery,
                  templatemo blue color, etc."
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Testimonials;

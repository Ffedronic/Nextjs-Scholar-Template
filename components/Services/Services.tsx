import SectionHeading from "@/lib/SectionHeading/SectionHeading";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";

function Services() {
  return (
    <Fade left>
      <section className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <SectionHeading title="Services" subtitle="Services" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <article className="service-item">
                <div className="icon">
                  <img src="/images/service-01.png" alt="book of degrees" />
                </div>
                <div className="main-content">
                  <h4>Online Degrees</h4>
                  <p>
                    Whenever you need free templates in HTML CSS, you just
                    remember TemplateMo website.
                  </p>
                  <div className="main-button">
                    <Link href="/online-degrees">View More</Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="service-item">
                <div className="icon">
                  <img src="/images/service-02.png" alt="book of courses" />
                </div>
                <div className="main-content">
                  <h4>Short Courses</h4>
                  <p>
                    You can browse free templates based on different tags such
                    as digital marketing, etc.
                  </p>
                  <div className="main-button">
                    <Link href="/short-courses">View More</Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="service-item">
                <div className="icon">
                  <img
                    src="/images/service-03.png"
                    alt="an expert of the web"
                  />
                </div>
                <div className="main-content">
                  <h4>Web Experts</h4>
                  <p>
                    You can start learning HTML CSS by modifying free templates
                    from our website too.
                  </p>
                  <div className="main-button">
                    <Link href="/web-experts">View More</Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Services;

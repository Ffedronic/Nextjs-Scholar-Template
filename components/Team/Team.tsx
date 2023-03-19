import SectionHeading from "@/lib/SectionHeading/SectionHeading";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";

function Team() {
  return (
    <Fade right>
      <section className="team section" id="team">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-12 text-center">
              <SectionHeading title="Team" subtitle="Team"/>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <article className="team-member">
                <div className="main-content">
                  <img src="/images/member-01.jpg" alt="Sophia as UX teacher" />
                  <span className="category">UX Teacher</span>
                  <h4>Sophia Rose</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook"></i>
                        <span className=" visually-hidden">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className=" visually-hidden">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className=" visually-hidden">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6">
              <article className="team-member">
                <div className="main-content">
                  <img src="/images/member-02.jpg" alt="cindy as graphic teacher" />
                  <span className="category">Graphic Teacher</span>
                  <h4>Cindy Walker</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook"></i>
                        <span className=" visually-hidden">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className=" visually-hidden">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className=" visually-hidden">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6">
              <article className="team-member">
                <div className="main-content">
                  <img src="/images/member-03.jpg" alt="david as full stack" />
                  <span className="category">Full Stack Master</span>
                  <h4>David Hutson</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook"></i>
                        <span className=" visually-hidden">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className=" visually-hidden">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className=" visually-hidden">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6">
              <article className="team-member">
                <div className="main-content">
                  <img src="/images/member-04.jpg" alt="stella as animator" />
                  <span className="category">Digital Animator</span>
                  <h4>Stella Blair</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook" title="facebook"></i>
                        <span className="visually-hidden">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className=" visually-hidden">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className=" visually-hidden">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Team;

import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";

function Team() {
  return (
    <Fade right>
      <div className="team section" id="team">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Team</h6>
                <h2>Team</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="/images/member-01.jpg" alt="member" />
                  <span className="category">UX Teacher</span>
                  <h4>Sophia Rose</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook"></i>
                        <span className="link">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className="link">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className="link">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="/images/member-02.jpg" alt="member" />
                  <span className="category">Graphic Teacher</span>
                  <h4>Cindy Walker</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook"></i>
                        <span className="link">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className="link">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className="link">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="/images/member-03.jpg" alt="member" />
                  <span className="category">Full Stack Master</span>
                  <h4>David Hutson</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook"></i>
                        <span className="link">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className="link">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className="link">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="main-content">
                  <img src="/images/member-04.jpg" alt="member" />
                  <span className="category">Digital Animator</span>
                  <h4>Stella Blair</h4>
                  <ul className="social-icons">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook" title="facebook"></i>
                        <span className="link">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                        <span className="link">twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className="link">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Team;

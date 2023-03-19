import SectionHeading from "@/lib/SectionHeading/SectionHeading";
import React from "react";
import { Fade } from "react-reveal";

function OnlineDegrees() {
  return (
    <Fade right>
      <section className="my-5 py-5">
        <div className="section about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-1">
                <div className="accordion" id="accordionExample">
                  <article className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Where shall we begin?
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Dolor <strong>almesit amet</strong>, consectetur
                        adipiscing elit, sed doesn't eiusmod tempor incididunt
                        ut labore consectetur <code>adipiscing</code> elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </article>
                  <article className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How do we work together?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Dolor <strong>almesit amet</strong>, consectetur
                        adipiscing elit, sed doesn't eiusmod tempor incididunt
                        ut labore consectetur <code>adipiscing</code> elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </article>
                  <article className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Why SCHOLAR is the best?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are more than one hundred responsive HTML
                        templates to choose from <strong>Template</strong>Mo
                        website. You can browse by different tags or categories.
                      </div>
                    </div>
                  </article>
                  <article className="accordion-item">
                    <h3 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Do we get the best support?
                      </button>
                    </h3>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You can also search on Google with specific keywords
                        such as{" "}
                        <code>
                          templatemo business templates, templatemo gallery
                          templates, admin dashboard templatemo, 3-column
                          templatemo, etc.
                        </code>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-5 align-self-center">
                <SectionHeading
                  title="Online Degrees"
                  subtitle="Online Degrees"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravid risus
                    commodo."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default OnlineDegrees;

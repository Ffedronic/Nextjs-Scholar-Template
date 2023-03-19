import SectionHeading from "@/lib/SectionHeading/SectionHeading";
import React from "react";
import CountUp from "react-countup";
import {Zoom } from "react-reveal"

function Facts() {
  return (
    <Zoom>
    <div id="facts" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <SectionHeading title="Fun Facts" subtitle="Fun Facts"/>
          </div>
        </div>
      </div>
      <section className="fun-facts pt-md-3 pb-md-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h3>
                      <CountUp end={100} />
                    </h3>
                    <p className="count-text ">Happy Students</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h3>
                      <CountUp end={100} />
                    </h3>
                    <p className="count-text ">Course Hours</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h3>
                      <CountUp end={100} />
                    </h3>
                    <p className="count-text ">Employed Students</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter end">
                    <h3>
                      <CountUp end={100} />
                    </h3>
                    <p className="count-text ">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Zoom>
  );
}

export default Facts;

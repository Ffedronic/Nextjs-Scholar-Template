import React from "react";
import CountUp from "react-countup";

function Facts() {
  return (
    <div className="section fun-facts pt-md-3 pb-md-0" id="facts">
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
    </div>
  );
}

export default Facts;

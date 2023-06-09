import React, { Fragment } from "react";

function Preloader() {
  return (
    <Fragment>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Preloader;

import React from "react";
import classes from "./Cta.module.css";

const Cta = () => {
  return (
    <div className={classes.cta}>
      <div className="container">
        <div className={`${classes.cta_card}`}>
          <div className={classes.cta_content}>
            <h4>Request Early Access to Get Started</h4>
            <h2>Register today & start exploring the endless possiblities.</h2>
          </div>
          <div className={classes.cta_btn}>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

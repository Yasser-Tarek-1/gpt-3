import React from "react";

import classes from "./Possibility.module.css";

import FeatureImage from "../../assets/FeatureImage.png";

const Possibility = () => {
  return (
    <div className={classes.possibility} id="casestudies">
      <div className="container">
        <div className={classes.possibility_content}>
          <div className={classes.possibility_img}>
            <img src={FeatureImage} alt="possibility" />
          </div>
          <div className={classes.possibility_text}>
            <h4>Request Early Access to Get Started</h4>
            <h2 className="gradient_text">
              The possibilities are beyond your imagination
            </h2>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <h4>Request Early Access to Get Started</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibility;

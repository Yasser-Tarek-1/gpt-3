import React from "react";
import classes from "./Feature.module.css";

import Rectangle17 from "../../assets/Rectangle17.png";

const Feature = ({ title, children, der }) => {
  return (
    <div
      className={classes.feature}
      style={{ flexDirection: der === "row" ? "row" : "column" }}
    >
      <div className={classes.feature_text}>
        <img src={Rectangle17} alt="Rectangle17" />
        <h3>{title}</h3>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Feature;

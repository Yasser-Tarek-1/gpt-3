import React from "react";

import classes from "./Header.module.css";

import Group81 from "../../assets/Group81.png";
import Illustration from "../../assets/Illustration.png";

const Header = () => {
  return (
    <div className={classes.header} id="home">
      <div className={`${classes["header-container"]} container`}>
        <div className={classes["header-content"]}>
          <h1 className={`gradient_text`}>
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className={classes.text}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className={classes.input}>
            <input type="text" placeholder="Your Email Address" />
            <button type="submit">Get Started</button>
          </div>
          <div className={classes.people}>
            <img src={Group81} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className={classes.ai}>
          <img src={Illustration} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;

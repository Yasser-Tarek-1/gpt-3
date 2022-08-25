import React from "react";
import { Feature } from "../../components";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <div className={classes.features} id="openai">
      <div className={`container ${classes.features_container}`}>
        <div className={classes.features_text}>
          <h3 className="gradient_text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h3>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className={classes.features_feature}>
          <Feature title="Improving end distrusts instantly">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded.
          </Feature>
          <Feature title="Become the tended active">
            Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to.
          </Feature>
          <Feature title="Message or am nothing">
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </Feature>
          <Feature title="Really boy law county">
            Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush.
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;

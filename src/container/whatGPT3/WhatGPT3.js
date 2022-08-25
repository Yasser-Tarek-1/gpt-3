import React from "react";

import Feature from "../../components/feature/Feature";

import classes from "./WhatGPT3.module.css";

const WhatGPT3 = () => {
  return (
    <div className={classes.wg} id="whatGPT">
      <div className="container">
        <div className={classes["wg_container"]}>
          <Feature title="What is GPT-3" der="row">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </Feature>
          <div className={classes["wg_center"]}>
            <h3 className="gradient_text">
              The possibilities are beyond your imagination
            </h3>
            <p>Explore The Library</p>
          </div>
          <div className={classes["wg_bottom"]}>
            <Feature title="Chatbots" der="col">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </Feature>
            <Feature title="Knowledgebase" der="col">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </Feature>
            <Feature title="Education" der="col">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </Feature>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;

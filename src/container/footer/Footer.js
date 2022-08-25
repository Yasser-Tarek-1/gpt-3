import React from "react";
import classes from "./Footer.module.css";

import logo from "../../assets/logo.svg";

import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.footer_content}>
          <div className={classes.row_one}>
            <h2 className="gradient_text">
              Do you want to step in to the future before others
            </h2>
            <p>Request Early Access</p>
          </div>
          <div className={classes.row_two}>
            <div className={classes.col_1}>
              <div className={classes.logo}>
                <img src={logo} alt="" />
              </div>
              <div className={classes.icons}>
                <p>
                  <a
                    href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoLinkedin color="#ae67fa" fontSize={30} />
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/Yasser-Tarek-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoGithub color="#ae67fa" fontSize={30} />
                  </a>
                </p>
              </div>
            </div>
            <div className={classes.links}>
              <div className={classes.col_2}>
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="#a">Overons</a>
                  </li>
                  <li>
                    <a href="#a" a>
                      Social Media
                    </a>
                  </li>
                  <li>
                    <a href="#a">Counters</a>
                  </li>
                  <li>
                    <a href="#a">Contact</a>
                  </li>
                </ul>
              </div>
              <div className={classes.col_3}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#a">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#a" a>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#a">Contact</a>
                  </li>
                </ul>
              </div>
              <div className={classes.col_4}>
                <h4>Get in touch</h4>
                <ul>
                  <li>
                    <a href="#a">Crechterwoord K12 182 DK Alknjkcb</a>
                  </li>
                  <li>
                    <a href="#a" a>
                      085-132567
                    </a>
                  </li>
                  <li>
                    <a href="#a">info@payme.net</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.row_three}>
            <p> © 2022 GPT-3. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

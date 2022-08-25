import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import classes from "./NavBar.module.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatGPT">What is GPT?</a>
      </p>
      <p>
        <a href="#openai ">Open AI</a>
      </p>
      <p>
        <a href="#casestudies">Case Studies</a>
      </p>
      <p>
        <a href="#library">Library</a>
      </p>
    </>
  );
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={classes.navbar}>
      <div className={`${classes["navbar-container"]} container`}>
        <div className={classes["navbar_logo"]}>
          <img src={logo} alt="" />
        </div>
        <div className={classes["navbar_links"]}>
          <Menu />
        </div>
        <div className={classes["navbar_sign"]}>
          <p className={classes.signin}>
            <a href="/signin">Sign in</a>
          </p>
          <p className={classes.signup}>
            <a href="/signup">Sign up</a>
          </p>
        </div>
        {
          <div className={classes["togle_menu"]}>
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                fontSize={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        }
        {toggleMenu && (
          <div className={`${classes["navbar_links_menu"]} scale-up-center`}>
            <Menu />
            <p>
              <a href="/signin">Sign in</a>
            </p>
            <p className={classes.signup}>
              <a href="/signup">Sign up</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

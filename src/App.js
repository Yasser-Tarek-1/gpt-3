import React from "react";

import {
  Footer,
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
} from "./container";

import { Brand, Cta, NavBar } from "./components";

import classes from "./App.module.css";
import "./grid/index.css";

const App = () => {
  return (
    <div className={classes.App}>
      <div className={classes.gradient_bg}>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

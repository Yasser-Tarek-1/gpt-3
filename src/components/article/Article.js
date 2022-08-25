import React from "react";
import classes from "./Article.module.css";

const Article = ({ img, data, title, red }) => {
  return (
    <div className={classes.article}>
      <div className={classes.article_img}>
        <img src={img} alt="article" />
      </div>
      <div className={classes.article_text}>
        <h4>{data}</h4>
        <h3>{title}</h3>
        <p>{red}</p>
      </div>
    </div>
  );
};

export default Article;

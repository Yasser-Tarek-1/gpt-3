import React from "react";

import Article from "../../components/article/Article";

import article1 from "../../assets/Rectangle22.png";
import article2 from "../../assets/Rectangle22-2.png";
import article3 from "../../assets/Rectangle22-3.png";
import article4 from "../../assets/Rectangle22-4.png";
import article5 from "../../assets/Rectangle22-1.png";

import classes from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={classes.blog} id="library">
      <div className="container">
        <div className={classes.blog_content}>
          <div className={classes.blog_heading}>
            <h2 className="gradient_text">
              A lot is happening, We are blogging about it.
            </h2>
          </div>
          <div className={classes.blog_image}>
            <div className={classes.blog_main}>
              <Article
                img={article1}
                data="Sep 26, 2021"
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                red="Read Full Article"
              />
            </div>
            <div className={classes.blog_sec}>
              <Article
                img={article2}
                data="Sep 26, 2021"
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                red="Read Full Article"
              />
              <Article
                img={article3}
                data="Sep 26, 2021"
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                red="Read Full Article"
              />
              <Article
                img={article4}
                data="Sep 26, 2021"
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                red="Read Full Article"
              />
              <Article
                img={article5}
                data="Sep 26, 2021"
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                red="Read Full Article"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

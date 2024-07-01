import React from "react";

// components
import NewsLetters from "./NewsLetters";

// css
import "./Blog.css";
import Categories from "./Categories";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedAuthors from "./FeaturedAuthors";
import RecentArticles from "./RecentArticles";
import PopularArticle from "./PopularArticles";

function Blog() {
 
  return (
    <div className="Blogs">

      <div className="Blog-containers">
      <h1>Blogs</h1>

        <Categories />
        <div className="blog-articles">
          <div className="blog-left">
            <FeaturedArticles />
            < RecentArticles />
            
          </div>
          <div className="blog-right">
            <FeaturedAuthors />
            <div className="">
              <h2>Popular Articles</h2>
              <div className="popular-articles">
                <PopularArticle />
              </div>
            </div>
            
          </div>
        </div>

        <NewsLetters />
      </div>
    </div>
  );
}

export default Blog;

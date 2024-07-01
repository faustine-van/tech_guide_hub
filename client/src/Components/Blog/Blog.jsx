import React from "react";

// components
import NewsLetters from "./NewsLetters";

// css
import "./Blog.css";
import Categories from "./Categories";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedAuthors from "./FeaturedAuthors";
import { Article } from "./RecentArticles";
import PopularArticle from "./PopularArticles";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="Blogs">
      <div className="Blog-containers">
        <h1>Blogs</h1>

        <Categories />
        <div className="blog-articles">
          <div className="blog-left">
            <FeaturedArticles />
            <div className="recents-articles">
              <h2>Recent Articles</h2>
              <div className="articles">
                <Article />
                <Article />
                <Article />
                <Article />
              </div>
            </div>
          </div>
          <div className="blog-right">
            <FeaturedAuthors />
            <div className="popular">
              <h2>Popular Articles</h2>
              <div className="popular-articles">
                <PopularArticle />
                <PopularArticle />
                <PopularArticle />
                <Link className="btn" href="#">
                  See All Authors
                  <svg
                    className="btn-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 16 4-4-4-4m6 8 4-4-4-4"
                    />
                  </svg>
                </Link>
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

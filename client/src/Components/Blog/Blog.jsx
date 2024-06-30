import React from "react";

// components
import NewsLetters from "./NewsLetters";

// css
import "./Blog.css";
import Categories from "./Categories";
import FeaturedArticles from "./FeaturedArticles";

function Blog() {
  const authors = [
    {
      name: "John Doe",
      bio: "John is a tech enthusiast with over 10 years of experience in the industry. He loves writing about the latest trends in technology.",
      image: "/Default_tech_enthusiast_0.jpg",
      link: "/author/john-doe",
    },
    {
      name: "Jane Smith",
      bio: "Jane is a software engineer and a passionate blogger who shares her insights on software development and best practices.",
      image: "/Default_different_people_3.jpg",
      link: "/author/jane-smith",
    },
    {
      name: "Alice Johnson",
      bio: "Alice is a cybersecurity expert with a knack for simplifying complex concepts for her readers.",
      image: "/Default_developer_or_tech_entusiast_3.jpg",
      link: "/author/alice-johnson",
    },
  ];
  return (
    <div className="Blogs">
      <div className="Blog-containers">
        <Categories />
        <div className="blog-articles">
          <div className="blog-left">
            <FeaturedArticles />
          </div>
          <div className="blog-right">
            <div className="featured-authors">
              <h2>Featured Authors</h2>
              <div className="authors-list">
                {authors.map((author, index) => (
                  <div className="author-item" key={index}>
                    <img
                      src={author.image}
                      alt={author.name}
                      className="author-image"
                    />
                    <div className="author-content">
                      <h3>{author.name}</h3>
                      <p>{author.bio}</p>
                      {/* <a href={author.link} className="cta-button">
                        Read more
                      </a> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h1>Blogs</h1>
        <NewsLetters />
      </div>
    </div>
  );
}

export default Blog;

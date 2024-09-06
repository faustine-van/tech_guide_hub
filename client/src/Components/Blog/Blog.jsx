import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsLetters from "../ReusableComponents/NewsLetters";
import Categories from "./Categories";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedAuthors from "./FeaturedAuthors";
import RecentArticles from "./RecentArticles";
import PopularArticle from "./PopularArticles";
import "./Blog.css";

function Blog() {
  const blogData = [
    {
      "id": 1,
      "author": "John Doe",
      "date": "July 15, 2023",
      "title": "Unlocking Your Career Potential: Tips for Professional Growth",
      "excerpt": "Discover practical strategies to elevate your career and unlock your full potential. Our expert insights will guide you on your journey to professional success.",
      "image": "/Default_blog_website_for_tech_world_3.jpg",
      "link": "/article"
    },
    {
      "id": 2,
      "author": "Jane Smith",
      "date": "August 22, 2023",
      "title": "The Future of Technology: Trends to Watch",
      "excerpt": "Explore the emerging trends in technology and what they mean for the future. Stay ahead of the curve with our latest insights.",
      "image": "/Default_blog_website_for_tech_world_3.jpg",
      "link": "/article"
    },
    {
      "id": 3,
      "author": "Jane Smith",
      "date": "August 22, 2023",
      "title": "The Future of Technology: Trends to Watch",
      "excerpt": "Explore the emerging trends in technology and what they mean for the future. Stay ahead of the curve with our latest insights.",
      "image": "/Default_blog_website_for_tech_world_3.jpg",
      "link": "/article"
    },
    {
      "id": 4,
      "author": "Jane Smith",
      "date": "August 22, 2023",
      "title": "The Future of Technology: Trends to Watch",
      "excerpt": "Explore the emerging trends in technology and what they mean for the future. Stay ahead of the curve with our latest insights.",
      "image": "/Default_blog_website_for_tech_world_3.jpg",
      "link": "/article"
    }
  ]
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setPosts(blogData);
  }, []);

  return (
    <div className="blog">
      <header className="blog__header">
        <h1 className="blog__title">SkillQuanta Blog</h1>
        <p className="blog__tagline">Empowering Professionals with Insights and Guidance</p>
      </header>

      <Categories />

      <main className="blog__content">
        <section className="blog__main">
          <FeaturedArticles />
          <RecentArticles />
          <div className="blog__posts">
            {posts.map((post) => (
              <article key={post.id} className="blog__post-card">
                <img src={post.image} alt="Blog Post" className="blog__post-image" />
                <div className="blog__post-content">
                  <div className="blog__post-meta">
                    <span className="blog__post-author">{post.author}</span>
                    <span className="blog__post-date">{post.date}</span>
                  </div>
                  <h3 className="blog__post-title">{post.title}</h3>
                  <p className="blog__post-excerpt">{post.excerpt}</p>
                  {/* <Link to={post.link} className="blog__post-link">Read More</Link> */}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="blog__sidebar">
          <FeaturedAuthors />
          <section className="blog__popular">
            <h2 className="blog__section-title">Popular Articles</h2>
            <div className="blog__popular-articles">
              <PopularArticle />
              <PopularArticle />
              <PopularArticle />
            </div>
            
          </section>
        </aside>
      </main>

      <nav className="blog__pagination">
        <button className="blog__pagination-btn">Previous</button>
        <button className="blog__pagination-btn blog__pagination-btn--active">1</button>
        <button className="blog__pagination-btn">2</button>
        <button className="blog__pagination-btn">3</button>
        <button className="blog__pagination-btn">Next</button>
      </nav>

      <footer className="blog__footer">
        <NewsLetters />
      </footer>
    </div>
  );
}

export default Blog;

import React from "react";
import PopularArticle from "./PopularArticles";
import { Newsletter } from "../ReusableComponents/NewsLetters";

import "./ArticleDetail.css";

function ArticleDetail() {
  return (
    <div className="article-details">
      <main>
        <article>
          <h2>
            The 2024 State of Marketing & Trends Report: Data from 1400+ Global
            Marketers
          </h2>
          <div className="meta-info">
            <span className="author">By John Doe</span> |{" "}
            <span className="date">June 29, 2024</span> |{" "}
            <span className="tag">Developer Insights</span>
          </div>
          <div className="hero-image">
            <img src="/Default_tech_world_0.jpg" alt="Hero Image" />
          </div>
          <div className="content">
            <p>
              Welcome to our latest tech insights where we explore the
              groundbreaking advancements in artificial intelligence.
            </p>

            <h2>Introduction to AI</h2>
            <p>
              Artificial Intelligence (AI) is revolutionizing various
              industries, from healthcare to finance. It enables machines to
              learn from data, make decisions, and even predict future trends.
            </p>

            <blockquote>
              "The future is here. It's just not evenly distributed yet." -
              William Gibson
            </blockquote>

            <p>
              As AI continues to evolve, its applications are becoming more
              diverse and impactful.
            </p>

            <h2>Key Applications of AI</h2>
            <ul>
              <li>
                <strong>Healthcare:</strong> AI is improving diagnostic accuracy
                and patient care.
              </li>
              <li>
                <strong>Finance:</strong> AI algorithms detect fraud and
                optimize trading strategies.
              </li>
              <li>
                <strong>Automotive:</strong> Self-driving cars are a reality
                thanks to AI advancements.
              </li>
            </ul>

            <h2>Challenges and Considerations</h2>
            <p>
              Despite its potential, AI also poses ethical and technical
              challenges. Ensuring transparency and accountability in AI systems
              is crucial.
            </p>

            <p style={{marginTop: '40px'}}>
              Stay updated with the latest in AI by subscribing to our
              newsletter.
            </p>

            <Newsletter   />

            <div className="popular" >
              <h2>Related articles</h2>
              <div className="popular-articles" style={{display: 'flex', gap: '10px', marginTop: '40px', flexWrap: 'wrap'}}>
                <PopularArticle />
                <PopularArticle />
                <PopularArticle />        
              </div>
             
            </div>
            
          </div>
        </article>
      </main>
    </div>
  );
}

export default ArticleDetail;

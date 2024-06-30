import React from 'react';

function FeaturedArticles() {
    return (
        <div className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="main-article">
          <img
            src="/Default_tech_world_0.jpg"
            alt=""
            className="main-article-image"
          />
          <div className="main-article-content">
            <h1>Tech world</h1>
            <p>
              Hear from our community members who have achieved their
              career and academic goals with the help of TechGuide Hub.
              Get inspired by their journeys and start your own success
              story today.
            </p>
            <a href="#" class="cta-button">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default FeaturedArticles;
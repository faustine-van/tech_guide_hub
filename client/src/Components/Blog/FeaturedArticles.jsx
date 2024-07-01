import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function FeaturedArticles() {
    return (
        <div className="featured-articles">
        <h2>Featured Articles</h2>
        <Carousel
                interval={3000}
               
                showArrows={true}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                swipeable={true}
                showThumbs={false}
                renderIndicator={false}
               
            >
                <div className="main-article">
          <img
            src="/Default_tech_world_0.jpg"
            alt=""
            className="main-article-image"
          />
          <div className="main-article-content">
            <h2>The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers</h2>
            <p>
              Hear from our community members who have achieved their
              career and academic goals with the help of TechGuide Hub.
              Get inspired by their journeys and start your own success
              story today.
            </p>
            <a href="#" className="cta-button">
              Read more
            </a>
          </div>
        </div>
        <div className="main-article">
          <img
            src="/Default_tech_world_0.jpg"
            alt=""
            className="main-article-image"
          />
          <div className="main-article-content">
            <h1>Hear From Our Learners: The Value of ALX AiCE</h1>
            <p>
              Hear from our community members who have achieved their
              career and academic goals with the help of TechGuide Hub.
              Get inspired by their journeys and start your own success
              story today.
            </p>
            <a href="#" className="cta-button">
              Read more
            </a>
          </div>
        </div>
            </Carousel>
      
      </div>
    );
}

export default FeaturedArticles;
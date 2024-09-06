import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <h2 className="featured-articles__title">Featured Articles</h2>
      <Carousel
        interval={5000}
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        showThumbs={false}
        showIndicators={true}
        className="featured-articles__carousel"
      >
        {[1, 2].map((index) => (
          <div key={index} className="featured-articles__item">
            <img
              src={`/Default_tech_world_${index}.jpg`}
              alt=""
              className="featured-articles__image"
            />
            <div className="featured-articles__content">
              <h3 className="featured-articles__heading">The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers</h3>
              <p className="featured-articles__excerpt">
                Hear from our community members who have achieved their
                career and academic goals with the help of TechGuide Hub.
                Get inspired by their journeys and start your own success
                story today.
              </p>
              <Link to='/blogs/article-detail' className="featured-articles__cta">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default FeaturedArticles;
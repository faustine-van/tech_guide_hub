import React from "react";
import { Link } from "react-router-dom";

export function Article() {
  return (
    <article className="card-article">
      <div className="article-img">
        <img
          src="/Default_look_good_3.jpg"
          className="card-img"
          alt="article img"
        />
        <div className="label">
          {" "}
          <span className="tag">Feature</span>{" "}
          <span className="date">June 13, 2024</span>
        </div>
      </div>
      <div className="articles-content">
        <h4 className="title">Hear From Our Learners: The Value of ALX AiCE</h4>
        <p className="info">
          Elemenatary tracks all the events for the day as you scheduled and you
          will never have to worry.
        </p>
        <button className="read-more-button">
          <span>Learn more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
export function Articles() {

  const articles = [
    {
      "id": "1",
      "imgSrc": "/Default_look_good_3.jpg",
      "tag": "Feature",
      "date": "June 13, 2024",
      "title": "Expert Advice: Navigating the Tech Industry for Beginners",
      "info": "Elementary tracks all the events for the day as you scheduled and you will never have to worry.",
      "link": "/learn-more"
    },
    {
      "id": "2",
      "imgSrc": "/Default_tech_world_0.jpg",
      "tag": "Update",
      "date": "August 10, 2024",
      "title": "The Future of AI Art: Trends and Predictions",
      "info": "In today’s competitive job market, it is crucial to continuously invest in your career development and unlock your full potential. SkillQuanta, a leading platform dedicated to professional growth and educational resources, offers a wealth of opportunities and insights to help individuals thrive in their respective fields.",
      "link": "/learn-more"
    },
    {
      "id": "3",
      "imgSrc": "/Default_developer_or_tech_entusiast_3.jpg",
      "tag": "Guide",
      "date": "September 5, 2024",
      "title": "Creating Impactful AI Art: A Step-by-Step Guide",
      "info": "Learn how to create compelling AI art with this comprehensive guide, including tips and techniques from industry experts.",
      "link": "/learn-more"
    },
    // {
    //   "id": "4",
    //   "imgSrc": "/Tech_Evolution.jpg",
    //   "tag": "Insight",
    //   "date": "October 1, 2024",
    //   "title": "How AI is Shaping the Future of Creative Industries",
    //   "info": "Explore the role of AI in transforming creative industries, from art and design to music and literature.",
    //   "link": "/learn-more"
    // },
    // {
    //   "id": "5",
    //   "imgSrc": "/Digital_Art.jpg",
    //   "tag": "Feature",
    //   "date": "November 15, 2024",
    //   "title": "Digital Art vs. Traditional Art: The Great Debate",
    //   "info": "A deep dive into the differences between digital and traditional art forms, including the pros and cons of each.",
    //   "link": "/learn-more"
    // },
    // {
    //   "id": "6",
    //   "imgSrc": "/AI_Ethics.jpg",
    //   "tag": "Discussion",
    //   "date": "December 20, 2024",
    //   "title": "The Ethics of AI in Art: What You Need to Know",
    //   "info": "An examination of the ethical considerations surrounding AI-generated art and the implications for artists and consumers.",
    //   "link": "/learn-more"
    // }
  ]
  return (
    <div className="articles">
      {articles.map((article) => (
      <article className="card-article" key={article.id}>
        <div className="article-img">
          <img
            src={article.imgSrc}
            className="card-img"
            alt="article img"
          />
          <div className="label">
            <span className="tag">{article.tag}</span>
            <span className="date">{article.date}</span>
          </div>
        </div>
        <div className="articles-content">
          <h4 className="title">{article.title}</h4>
          <p className="info">{article.info}</p>
          <Link className="read-more-button">
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="none"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </article>
    ))}
    </div>
  );
}



function RecentArticles() {
  const recentArticles = [
    {
      id: 1,
      title: "10 Essential Skills for Software Engineers in 2024",
      excerpt: "Stay ahead of the curve with these must-have skills for software engineers.",
      author: "Jane Smith",
      date: "August 1, 2024",
      image: "/Default_websites_for_event_designs_zoomwebnar_for_inspiration_2.jpg"
    },
    {
      id: 2,
      title: "The Rise of AI in Cybersecurity: What You Need to Know",
      excerpt: "Explore how artificial intelligence is revolutionizing the cybersecurity landscape.",
      author: "Mike Johnson",
      date: "July 28, 2024",
      image: "/Default_websites_for_event_designs_zoomwebnar_for_inspiration_2.jpg"
    },
    {
      id: 3,
      title: "5 Strategies for Effective Remote Team Management",
      excerpt: "Learn how to lead and motivate distributed teams in the digital age.",
      author: "Sarah Lee",
      date: "July 25, 2024",
      image: "/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg"
    },
    {
      id: 4,
      title: "5 Strategies for Effective Remote Team Management",
      excerpt: "Learn how to lead and motivate distributed teams in the digital age.",
      author: "Sarah Lee",
      date: "July 25, 2024",
      image: "/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg"
    }
  ];

  return (
    <section className="recent-articles">
      <h2 className="recent-articles__title">Recent Articles</h2>
      <div className="recent-articles__grid">
        {recentArticles.map((article) => (
          <article key={article.id} className="recent-articles__item">
            <img src={article.image} alt={article.title} className="recent-articles__image" />
            <div className="recent-articles__content">
              <h3 className="recent-articles__heading">{article.title}</h3>
              <p className="recent-articles__excerpt">{article.excerpt}</p>
              <div className="recent-articles__meta">
                <span className="recent-articles__author">{article.author}</span>
                <span className="recent-articles__date">{article.date}</span>
              </div>
              <Link to={`/article/${article.id}`} className="recent-articles__link">Read More</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentArticles;

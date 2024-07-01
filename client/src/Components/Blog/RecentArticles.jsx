import React from "react";

export function Article() {
  return (
    <article class="card-article">
      <div className="article-img">
        <img
          src="/Default_look_good_3.jpg"
          className="card-img"
          alt="article img"
        />
        <div className="label">
          {" "}
          <span class="tag">Feature</span>{" "}
          <span class="date">June 13, 2024</span>
        </div>
      </div>
      <div className="articles-content">
        <h4 class="title">Hear From Our Learners: The Value of ALX AiCE</h4>
        <p class="info">
          Elemenatary tracks all the events for the day as you scheduled and you
          will never have to worry.
        </p>
        <button class="button">
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
  return (
    <div className="articles">
      <Article />
      <Article />
      <Article />
    </div>
  );
}

function RecentArticles() {
  return (
    <div className="recents-articles">
      <h2>Recent Articles</h2>
      <Articles />
    </div>
  );
}

export default RecentArticles;

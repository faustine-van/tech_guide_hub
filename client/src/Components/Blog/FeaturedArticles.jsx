import React from 'react';

function FeaturedArticles() {
    return (
        <section className="featured-articles">
            <h2>Featured Articles</h2>
            <div className="articles-list">
                {/* Replace with dynamic data */}
                <article>
                    <h3>Title of the Featured Article 1</h3>
                    <p>Summary of the featured article 1...</p>
                    <a href="/article/1">Read More</a>
                </article>
                <article>
                    <h3>Title of the Featured Article 2</h3>
                    <p>Summary of the featured article 2...</p>
                    <a href="/article/2">Read More</a>
                </article>
            </div>
        </section>
    );
}

export default FeaturedArticles;
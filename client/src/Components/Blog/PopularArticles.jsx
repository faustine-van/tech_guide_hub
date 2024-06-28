import React from 'react';

function PopularArticles() {
    return (
        <section className="popular-articles">
            <h2>Popular Articles</h2>
            <div className="articles-list">
                {/* Replace with dynamic data */}
                <article>
                    <h3>Title of the Popular Article 1</h3>
                    <p>Summary of the popular article 1...</p>
                    <a href="/article/5">Read More</a>
                </article>
                <article>
                    <h3>Title of the Popular Article 2</h3>
                    <p>Summary of the popular article 2...</p>
                    <a href="/article/6">Read More</a>
                </article>
            </div>
        </section>
    );
}


export default PopularArticles;
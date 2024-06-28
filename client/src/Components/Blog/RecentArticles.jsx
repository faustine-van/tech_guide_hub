import React from 'react';

function RecentArticles() {
    return (
        <section className="recent-articles">
            <h2>Recent Articles</h2>
            <div className="articles-list">
                {/* Replace with dynamic data */}
                <article>
                    <h3>Title of the Recent Article 1</h3>
                    <p>Summary of the recent article 1...</p>
                    <a href="/article/3">Read More</a>
                </article>
                <article>
                    <h3>Title of the Recent Article 2</h3>
                    <p>Summary of the recent article 2...</p>
                    <a href="/article/4">Read More</a>
                </article>
            </div>
        </section>
    );
}


export default RecentArticles;
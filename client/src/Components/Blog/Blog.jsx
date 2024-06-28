import React from 'react';

// components
import NewsLetters from './NewsLetters';

// css
import './Blog.css';

function Blog() {
    return (
        <div className='Blogs'>
            <div className="Blog-containers">
            <h1>Blogs</h1>
            <NewsLetters />
            </div>
          

        </div>
    );
}

export default Blog;
import React from 'react';
import { NavLink } from "react-router-dom";

import './Categories.css';

function Categories() {
    return (
      <header className="Blog-header">
          <div className="Blog-categories">
          <h2>Categories</h2>

            <div className="categories">
                  <NavLink
                    to="/blogs/entire-article-collections"
                    className="category"
                  >
                    {" "}
                    Entire Article Collection{" "}
                  </NavLink>
                  <a href="#1" className="category">
                    {" "}
                    Career Tips{" "}
                  </a>
                  <NavLink href="#2" className="category">
                    {" "}
                    Professional Insights{" "}
                  </NavLink>
                  <a href="#3" className="category">
                    Job Advice
                  </a>
                  <a href="#3" className="category">
                    {" "}
                    Learning Materials
                  </a>
                  <a href="#job1" className="category">
                    Developer Stories
                  </a>
                  <a href="#job2" className="category">
                    Resources Articles
                  </a>
                  <a href="#job3" className="category">
                    Skill Building
                  </a>
                  <a href="#job3" className="category">
                    Developer Insights
                  </a>
            </div>
          </div>
        </header>
    );
  }
  

export default Categories;
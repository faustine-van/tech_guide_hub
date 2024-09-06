import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './ShareButtonsBlog.css'

function ShareButtonsBlog() {
    return (
        <div className="share-buttons-container">
        <Link className="share-button">
          <FaFacebookF size={16} />
        </Link>
        <Link className="share-button">
          <FaTwitter size={16} />
        </Link>
        <Link className="share-button">
          <FaLinkedinIn size={16} />
        </Link>
        <Link className="share-button">
          <FaLink size={16} />
        </Link>
      </div>
    );
}

export default ShareButtonsBlog;
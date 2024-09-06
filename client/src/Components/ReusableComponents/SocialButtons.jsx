import React from 'react';
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function SocialButtons() {
  return (
    <div className="social-btns">


      <Link className="social-btn">
        <FaFacebookF size={16} />
      </Link>
      <Link className="social-btn">
        <FaTwitter size={16} />
      </Link>
      <Link className="social-btn">
        <FaLinkedinIn size={16} />
      </Link>
      <Link className="social-btn">
        <FaInstagram size={16} />
      </Link>
      <Link className="social-btn">
        <FaWhatsapp size={16} />
      </Link>
    </div>
  );
}

export default SocialButtons;
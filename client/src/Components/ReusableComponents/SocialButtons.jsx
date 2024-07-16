import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';


function SocialButtons() {
    return (
        <div className="social-btns">
            <div className="social">
              <a className="social-btn facebook" href="#">
                <FaFacebookSquare />
              </a>
            </div>
            <div className="social">
              <a className="social-btn twitter" href="#">
                <FaSquareXTwitter />
              </a>
            </div>
            <div className="social">
              <a className="social-btn whatsapp" href="#">
                <FaWhatsappSquare />
              </a>
            </div>
            <div className="social">
              <a className="social-btn linkedin" href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
    );
}

export default SocialButtons;
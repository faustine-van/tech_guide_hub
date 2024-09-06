import React from 'react';
import './Profile.css';
import { FaUserCircle, FaTwitter, FaLinkedin, FaGithub, FaEdit } from 'react-icons/fa';

const Profile = () => {
  // Example user data
  const user = {
    name: 'John Doe',
    bio: 'Web Developer and Tech Enthusiast',
    location: 'New York, USA',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    interests: ['Coding', 'Traveling', 'Music', 'Photography'],
    socialProfiles: [
      { platform: 'Twitter', url: 'https://twitter.com/johndoe', icon: <FaTwitter /> },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: <FaLinkedin /> },
      { platform: 'GitHub', url: 'https://github.com/johndoe', icon: <FaGithub /> },
    ]
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-bio">{user.bio}</p>
        <button className="edit-profile-btn" aria-label="Edit Profile">
          <FaEdit />
        </button>
      </div>
      <div className="profile-details">
        <h2>Personal Information</h2>
        <ul>
          <li><strong>Location:</strong> {user.location}</li>
          <li><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></li>
          <li><strong>Phone:</strong> <a href={`tel:${user.phone}`}>{user.phone}</a></li>
        </ul>
        <h2>Interests</h2>
        <ul className="profile-interests">
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <h2>Connect with Me</h2>
        <div className="profile-social">
          {user.socialProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.platform}
              className="social-icon-wrapper"
            >
              <div className="social-icon">{profile.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

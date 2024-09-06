import React, { useState } from 'react';
import { FaTh, FaList, FaSearch, FaEllipsisV } from 'react-icons/fa';
import './Profile.css';
import { Link } from 'react-router-dom';
const ProfileList = ({ profiles }) => {
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile__list">
      <div className='profile__header'>
        <h2>Mentors</h2>
        <p className="font-size-sm">Explore Mentors and connect with them.</p>
      </div>
      <div className="profile__list-header">
        <div className="view__toggle">
          <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
            <FaTh />
          </button>
          <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
            <FaList />
          </button>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Find a mentor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search__icon" />
        </div>
      </div>
      <div className={`profile__container ${view}`}>
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} view={view} />
        ))}
      </div>
    </div>
  );
};

const ProfileCard = ({ profile, view }) => {
  return (
    <div className={`profile-card ${view}`}>
      <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
      <div className="profile__info">
        <div className="profile__header">
          <h3 className='profile__name'>{profile.name}</h3>
          <p className="profile-title">{profile.title}</p>
        </div>
        <div className="mentor__stats">
  <span>{profile.menteesCount} Mentees</span>
  <span>{profile.yearsOfExperience} Yrs Exp</span>
</div>
        <Link to={`/profile/${profile.id}`} className="profile-link">
          View Profile
        </Link>
        <button className="more-options">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
};

export { ProfileList, ProfileCard };
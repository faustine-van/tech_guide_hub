import React from 'react';
import UserProfile from './UserProfile';
import './DashboardProfile.css';

const DashboardProfile = ({ profiles }) => {
  const user = profiles.find(profile => profile.id === 'currentUserId'); // Replace 'currentUserId' with the actual logged-in user ID

  if (!user) return <div>User not found</div>;

  return (
    <div className="dashboard-profile">
      <UserProfile user={user} />
    </div>
  );
};

export default DashboardProfile;

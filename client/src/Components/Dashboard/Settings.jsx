import React from 'react';
import './Setting.css';

const Setting = () => {
  return (
    <div className="setting-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <h3>Account Settings</h3>
        <p>Manage your account settings and set email preferences.</p>
      </div>
      <div className="setting-item">
        <h3>Privacy Settings</h3>
        <p>Control your privacy settings and manage your data.</p>
      </div>
      <div className="setting-item">
        <h3>Notification Settings</h3>
        <p>Choose your notification preferences and manage alerts.</p>
      </div>
    </div>
  );
};

export default Setting;

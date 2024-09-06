import React from 'react';
import './Notification.css';
import { FaBell } from 'react-icons/fa';

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="notification-header">
        <FaBell className="notification-icon" />
        <h1>Notifications</h1>
      </div>
      <div className="notification-list">
        <div className="notification-item">
          <p>You have a new message from John Doe.</p>
          <span className="notification-time">2 hours ago</span>
        </div>
        <div className="notification-item">
          <p>Your post has been approved.</p>
          <span className="notification-time">5 hours ago</span>
        </div>
        <div className="notification-item">
          <p>System update completed successfully.</p>
          <span className="notification-time">1 day ago</span>
        </div>
        <div className="notification-item">
          <p>System update completed successfully.</p>
          <span className="notification-time">1 day ago</span>
        </div>
        <div className="notification-item">
          <p>System update completed successfully.</p>
          <span className="notification-time">1 day ago</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;

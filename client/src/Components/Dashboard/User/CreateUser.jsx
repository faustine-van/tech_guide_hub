import React from 'react';
import '../Form.css';

// CreateUser Component
const CreateUser = () => {
  return (
    <div className="user-container">
      <h2>Create New User</h2>
      <div className="user-profile">
        <img src="/profilePhoto-default.jpg" className='user-profile-photo' alt="Profile" />
      </div>
      <form className="user-form">
        <label htmlFor="name">Username</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="role">Role</label>
        <select id="role" name="role">
          <option value="all">All Types</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

// EditUser Component
export function EditUser() {
  return (
    <div className="user-container">
      <h2>Edit User</h2>
      <div className="user-profile">
        <img src="/profilePhoto-default.jpg" className='user-profile-photo' alt="Profile" />
      </div>
      <form className="user-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="role">Role:</label>
        <select id="role" name="role">
          <option value="all">All Types</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <label htmlFor="old-password">Old Password:</label>
        <input type="password" id="old-password" name="old-password" placeholder="Enter your old password" required />

        <label htmlFor="new-password">New Password:</label>
        <input type="password" id="new-password" name="new-password" placeholder="Enter your new password" required />

        <button type="submit" className="submit-button">Update User</button>
      </form>
    </div>
  );
};

export default CreateUser;

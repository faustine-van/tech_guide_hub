import React from 'react';

import { FaBlog, FaClipboardList, FaComments, FaUser, FaChartBar, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function Overview() {
    return (
        <>
            <div className="card-stats">
                <div className="card-header">Quick Stats</div>
                <div className="card-content">
                    <div className="stat-boxes">
                    <div className="stat-box">
                        <p> <FaUsers />Users</p>
                            <h1>10</h1>
                        </div>
                        <div className="stat-box">
                            <p> <FaBlog />Blogs</p>
                            <h1>10</h1>
                        </div>
                        <div className="stat-box">
                            <p> <FaClipboardList />Resources</p>
                            <h1>5</h1>
                        </div>
                        <div className="stat-box">
                            <p> <FaComments /> Comments</p>
                            <h1>20</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dash-cards">
                <div className="dash-card">
                    <div className="card-header">
                        <FaClipboardList /> Content Management
                    </div>
                    <div className="card-content">
                        <NavLink to='/dashboard/manage-posts' className='dash-content-link'>Manage Blogs</NavLink>
                        <NavLink to='/dashboard/manage-resources' className='dash-content-link'>Manage Opportunities</NavLink>
                    </div>
                </div>
                <div className="dash-card">
                    <div className="card-header">
                        <FaUser /> User Management
                    </div>
                    <div className="card-content">
                        <NavLink to='/dashboard/manage-users' className='dash-content-link'>Manage Users</NavLink>
                    </div>
                </div>
            </div>
            <div className="dash-card">
                <div className="card-header">
                    <FaComments /> Recent Activity
                </div>
                <div className="card-content">
                    <ul>
                        <li>User A commented on Blog Post 1</li>
                        <li>New Opportunity added: Internship at XYZ</li>
                    </ul>
                </div>
            </div>
            <div className="dash-card">
                <div className="card-header">
                    <FaChartBar /> Analytics
                </div>
                <div className="card-content">
                    <p>Coming soon...</p>
                </div>
            </div>
        </>
    );
}

export default Overview;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBlog, FaClipboardList, FaComments, FaChartBar, FaBell, FaQuestionCircle, FaEnvelope, FaFileAlt, FaChevronLeft, FaChevronRight, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Dashboard.css';

function Dashboard(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`dashboard ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
            <div className={`dash-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <button onClick={toggleSidebar} className="sidebar-toggle-btn">
                    {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
                <div className="dash-sidebar-links">
                    <NavLink to='/' className='dash-sidebar-link'>
                        <FaHome /> {!isCollapsed && 'Home'}
                    </NavLink>
                    <NavLink to='/profile' className='dash-sidebar-link'>
                        <FaUser /> {!isCollapsed && 'Profile'}
                    </NavLink>
                    <NavLink to='/settings' className='dash-sidebar-link'>
                        <FaCog /> {!isCollapsed && 'Settings'}
                    </NavLink>
                    <NavLink to='/notifications' className='dash-sidebar-link'>
                        <FaBell /> {!isCollapsed && 'Notifications'}
                    </NavLink>
                    <NavLink to='/messages' className='dash-sidebar-link'>
                        <FaEnvelope /> {!isCollapsed && 'Messages'}
                    </NavLink>
                    <NavLink to='/reports' className='dash-sidebar-link'>
                        <FaFileAlt /> {!isCollapsed && 'Reports'}
                    </NavLink>
                    <NavLink to='/logout' className='dash-sidebar-link'>
                        <FaSignOutAlt /> {!isCollapsed && 'Logout'}
                    </NavLink>
                </div>
            </div>
            <div className="dash-content">
                <div className="dash-navbar">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div className="dash-logo">
                        <h2 className="dash-logo-text">Dashboard</h2>
                    </div>
                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to='/' className='dash-sidebar-link'>
                            <FaHome /> Home
                        </NavLink>
                        <NavLink to='/profile' className='dash-sidebar-link'>
                            <FaUser /> Profile
                        </NavLink>

                        <NavLink to='/notifications' className='dash-sidebar-link'>
                            <FaBell /> Notifications
                        </NavLink>
                        <NavLink to='/messages' className='dash-sidebar-link'>
                            <FaEnvelope /> Messages
                        </NavLink>
                        <NavLink to='/reports' className='dash-sidebar-link'>
                            <FaFileAlt /> Reports
                        </NavLink>

                        <NavLink to='/help' className='dash-sidebar-link'>
                            <FaQuestionCircle /> Help
                        </NavLink>
                        <NavLink to='/settings' className='dash-sidebar-link'>
                            <FaCog /> Settings
                        </NavLink>
                        <NavLink to='/logout' className='dash-sidebar-link'>
                            <FaSignOutAlt /> Logout
                        </NavLink>
                    </div>
                    <div className="dash-profile-container">
                        <div className="dash-profile-links">
                            <NavLink to='/help' className='dash-link'>
                                <FaQuestionCircle /> Help
                            </NavLink>
                            <NavLink to='/settings' className='dash-link'>
                                <FaCog /> Settings
                            </NavLink>
                        </div>
                        <div className="dash-profile">
                            <img src="/profilePhoto-default.jpg" className='dash-profile-photo' alt="Profile" />
                        </div>
                    </div>
                </div>
                <div className="dash-container">
                    <nav className="breadcrumbs">
                        <NavLink to="/dashboard" className="breadcrumb-link">Dashboard</NavLink>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">Overview</span>
                    </nav>
                    <div className="card-stats">
                        <div className="card-header">Quick Stats</div>
                        <div className="card-content">
                            <div className="stat-boxes">
                                <div className="stat-box">
                                    <FaBlog />
                                    <p>Blogs</p>
                                    <p>10</p>
                                </div>
                                <div className="stat-box">
                                    <FaClipboardList />
                                    <p>Opportunities</p>
                                    <p>5</p>
                                </div>
                                <div className="stat-box">
                                    <FaComments />
                                    <p>Comments</p>
                                    <p>20</p>
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
                                <NavLink to='/manage-blogs' className='dash-content-link'>Manage Blogs</NavLink>
                                <NavLink to='/manage-opportunities' className='dash-content-link'>Manage Opportunities</NavLink>
                            </div>
                        </div>
                        <div className="dash-card">
                            <div className="card-header">
                                <FaUser /> User Management
                            </div>
                            <div className="card-content">
                                <NavLink to='/manage-users' className='dash-content-link'>Manage Users</NavLink>
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
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaChartBar, FaBell, FaQuestionCircle, FaEnvelope, FaFileAlt, FaChevronLeft, FaChevronRight, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Dashboard.css';
import SocialButtons from '../ReusableComponents/SocialButtons';


function Dashboard(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // get current path

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to determine breadcrumb items based on the current path
    const getBreadcrumbs = () => {
        const pathnames = location.pathname.split('/').filter(x => x);
        const breadcrumbItems = [
            ...pathnames.map((pathname, index) => ({
                name: pathname.charAt(0).toUpperCase() + pathname.slice(1),
                path: `/${pathnames.slice(0, index + 1).join('/')}`
            }))
        ];
        return breadcrumbItems;
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
                    <NavLink to='/dashboard' className='dash-sidebar-link'>
                        <FaChartBar /> {!isCollapsed && 'Overview'}
                    </NavLink>
                    
                    <NavLink to='/dashboard/notifications' className='dash-sidebar-link'>
                        <FaBell /> {!isCollapsed && 'Notifications'}
                    </NavLink>
                    <NavLink to='/dashboard/create-user' className='dash-sidebar-link'>
                        <FaEnvelope /> {!isCollapsed && 'Messages'}
                    </NavLink>
                    <NavLink to='dashboard/reports' className='dash-sidebar-link'>
                        <FaFileAlt /> {!isCollapsed && 'Reports'}
                    </NavLink>
                    <NavLink to='/dashboard/my-profile' className='dash-sidebar-link'>
                        <FaUser /> {!isCollapsed && 'My Profile'}
                    </NavLink>
                    <NavLink to='dashboard/settings' className='dash-sidebar-link'>
                            <FaCog /> {!isCollapsed &&  'Settings'}
                    </NavLink>
                    <NavLink to='dashboard/logout' className='dash-sidebar-link'>
                        <FaSignOutAlt /> {!isCollapsed && 'Logout'}
                    </NavLink>
                </div>
            </div>
            <div className="dash-content">
                <div className="dash-navbar">

                    <div className="dash-logo">
                        <button className="menu-toggle" onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                        <h2 className="dash-logo-text">Dashboard</h2>
                    </div>
                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to='/' className='dash-sidebar-link'>
                            <FaHome /> Home
                        </NavLink>
                        <NavLink to='/dashboard/overview' className='dash-sidebar-link'>
                        <FaChartBar /> Overview
                    </NavLink>
                        <NavLink to='dashboard/notifications' className='dash-sidebar-link'>
                            <FaBell /> Notifications
                        </NavLink>
                        <NavLink to='dashboard/messages' className='dash-sidebar-link'>
                            <FaEnvelope /> Resource Types
                        </NavLink>
                        <NavLink to='dashboard/reports' className='dash-sidebar-link'>
                            <FaFileAlt /> Reports
                        </NavLink>

                        <NavLink to='dashboard/help' className='dash-sidebar-link'>
                            <FaQuestionCircle /> Help
                        </NavLink>
                        <NavLink to='dashboard/settings' className='dash-sidebar-link'>
                            <FaCog /> Settings
                        </NavLink>
                        <NavLink to='dashboard/profile/me' className='dash-sidebar-link'>
                            <FaUser />My Profile
                        </NavLink>
                        <NavLink to='/logout' className='dash-sidebar-link'>
                            <FaSignOutAlt /> Logout
                        </NavLink>
                    </div>
                    <div className="dash-profile-container">
                        <div className="dash-profile-links">
                            <NavLink to='/help' className='dash-link'>
                                <FaBell />
                            </NavLink>
                            <NavLink to='/help' className='dash-link'>
                                <FaQuestionCircle /> Help
                            </NavLink>
                            <NavLink to='/dashboard/settings' className='dash-link'>
                                <FaCog /> Settings
                            </NavLink>
                        </div>
                        <div className="dash-profile">
                            <img src="/profilePhoto-default.jpg" className='dash-profile-photo' alt="Profile" />
                        </div>
                    </div>
                </div>
                <div className="dash-container">
                    {/* Dynamic Breadcrumbs */}
                    <nav className="breadcrumbs">
                        {getBreadcrumbs().map((breadcrumb, index) => (
                            <React.Fragment key={breadcrumb.path}>
                                <NavLink to={breadcrumb.path} className="breadcrumb-link">
                                    {breadcrumb.name}
                                </NavLink>
                                {index < getBreadcrumbs().length - 1 && (
                                    <span className="breadcrumb-separator">/</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>


                    <Outlet name="dashboard" />
                </div>

                <div className="footer">
                <div className="footer-copyright">
                    <p>&copy; 2024 SkillQuanta Hub. All rights reserved.</p>
                    <div className="footer-securty-menu">
                        <div className="footer-menu-column">
                            <Link className="footer-link" href="#1">
                                Terms of use
                            </Link>
                            <Link className="footer-link" href="#2">
                                Privacy policy
                            </Link>
                            <Link className="footer-link" href="#2">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div className="footer-social-media" style={{display: 'flex', justifyContent: 'center'}}>
                        {/* <!-- Social media icons --> */}
                        <SocialButtons />

                    </div>

                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Dashboard;

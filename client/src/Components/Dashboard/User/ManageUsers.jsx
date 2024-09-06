import React from 'react';
import { FaUserAlt, FaUsers, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

import '../DashStyle.css'

export function UsersOverview() {
    return(
        <>
        <div className="report-container">
                <h2>Stats</h2>
                <div className="report-boxes">
                    <div className="report-box">
                        <p> <FaUsers /> Total Users</p>
                        <h1>100</h1>
                    </div>
                    <div className="report-box">
                        <p> <FaUserAlt /> Admins</p>
                        <h1>10</h1>
                    </div>
                    <div className="report-box">
                        <p> <FaUsers />Regular Users</p>
                        <h1>90</h1>
                    </div>
                </div>
            </div>
            <h2>Manage Users</h2>

            {/* Add table or list for managing users */}
            <div className="dash-table-container">
                <Link to='/dashboard/manage-users/create-user' className="action-btn create">Create User</Link>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>
                            <td>
                                <Link to={`/dashboard/manage-users/edit-user/1`} className="action-btn">Edit</Link>

                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>John@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className="table-img">
                                    <img src="/profilePhoto-default.jpg" alt="image" />
                                </div>
                            </td>

                            <td>
                                <Link className="action-btn">Edit</Link>
                                <Link className="action-btn delete">Delete</Link>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div className="pages">
                    <div className="pagination-start">
                        <a href="#">
                            <button className="page">
                                <FaAngleDoubleLeft />

                                <span>First Page</span>
                            </button>

                        </a>
                        <a href="#">
                            <button className="page">
                                <FaAngleLeft />
                                <span>Prev Page</span>
                            </button>
                        </a>
                    </div>
                    <div className="pagination-end">
                        <button className="page">
                            <span>Next Page</span>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

function ManageUsers() {
    return (
        <div className="manage-users-page">
            <Outlet />
        </div>
    );
}

export default ManageUsers;

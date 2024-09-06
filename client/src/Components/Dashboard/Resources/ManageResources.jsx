import React from 'react';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

export function ResourcesOverview() {
    return (
        <>
            <div className="report-container">
                <h2>Stats</h2>
                <div className="report-boxes">
                    <div className="report-box">
                        <p> Total Users</p>
                        <h1>100</h1>
                    </div>
                    <div className="report-box">
                        <p>Admins</p>
                        <h1>10</h1>
                    </div>
                    <div className="report-box">
                        <p>Regular Users</p>
                        <h1>90</h1>
                    </div>
                </div>
            </div>
            <h2>Manage Users</h2>

            {/* Add table or list for managing users */}
            <div className="dash-table-container">
                <Link to='/dashboard/manage-resources/create-resource' className="action-btn create">Create Resources</Link>
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


function ManageResources() {
    return (
        <div className="manage-resources-page">
            <h1>Manage Resources</h1>
            {/* Add table or list for managing events */}
            <Outlet />

        </div>
    );
}

export default ManageResources;

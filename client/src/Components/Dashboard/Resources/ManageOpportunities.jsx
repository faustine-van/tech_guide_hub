import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

function ManageOpportunities() {
    return (
        <div>
             <div className="manage-opportunities-page">

        <div className="report-container">
                    <h2>Stats</h2>
                    <div className="report-boxes">
                        <div className="report-box">
                            <p> <FaClipboardList /> Total Opportunities</p>
                            <h2>100</h2>
                        </div>
                       
                    </div>  
                </div>
            <h2>Manage Opportunities</h2>

            {/* Add table or list for managing users */}
            <div className="dash-table-container">
            <button className="action-btn create">Create Opportunties</button>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                           
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John_doe</td>
                            
                            <td>
                                <button className="action-btn">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
    </div>
        </div>
    );
}

export default ManageOpportunities;
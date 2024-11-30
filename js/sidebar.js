import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>AdTool</h2>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/campaigns">Campaigns</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/settings">Settings</Link>
            </nav>
        </div>
    );
};

export default Sidebar;

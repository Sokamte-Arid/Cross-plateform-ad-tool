import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="metrics">
                <div className="card">Total Campaigns: 12</div>
                <div className="card">Active Campaigns: 8</div>
                <div className="card">Pending Approvals: 3</div>
            </div>
            <div className="performance-graph">
                <h2>Performance Trends</h2>
                <p>Graph placeholder (Use a library like Chart.js).</p>
            </div>
        </div>
    );
};

export default Dashboard;

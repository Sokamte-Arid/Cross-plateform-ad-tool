import React, { useState } from 'react';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([
        { id: 1, name: 'Summer Sale', status: 'Active', budget: 1200 },
        { id: 2, name: 'Winter Promo', status: 'Paused', budget: 2500 },
    ]);

    return (
        <div className="campaigns">
            <h1>Campaign Management</h1>
            <button className="create-btn">Create Campaign</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Budget</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign) => (
                        <tr key={campaign.id}>
                            <td>{campaign.name}</td>
                            <td>{campaign.status}</td>
                            <td>${campaign.budget}</td>
                            <td>
                                <button>Edit</button>
                                <button>Pause</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Campaigns;

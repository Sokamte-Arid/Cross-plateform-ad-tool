import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';
import Reports from './components/Reports';
import Settings from './components/Settings';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Sidebar for Navigation */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/campaigns" element={<Campaigns />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

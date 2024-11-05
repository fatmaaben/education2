import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        <Topbar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;

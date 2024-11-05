import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import DashboardContent from './components/DashboardContent/DashboardContent';
import Student from './components/Student/Students';

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <div className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<DashboardContent />}/>
            <Route path="/dashboard" element={<DashboardContent />}/>
            <Route path="/student" element={<Student />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

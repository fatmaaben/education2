import React from 'react';
import { FaTachometerAlt,FaSignOutAlt, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaClipboardList, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><h2>لوحة القيادة</h2></li>
        <li>
          <a >
            <Link to="/dashboard" >
            Dashboard <FaTachometerAlt /></Link>
          </a>
        </li>
        <li>
          <a href="Student">
            Students <FaUserGraduate />
          </a>
        </li>
        <li>
          <a href="#teachers">
            Teachers <FaChalkboardTeacher />
          </a>
        </li>
        <li>
          <a href="#users">
            Utilisateurs <FaUsers />
          </a>
        </li>
        <li>
          <a href="#class">
            Class <FaClipboardList />
          </a>
        </li>
        <li>
          <a href="#attendance">
            Attendance <FaCalendarCheck />
          </a>
        </li>
        <li>
          <a href="#deconnexion">
            Deconnexion <FaSignOutAlt />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

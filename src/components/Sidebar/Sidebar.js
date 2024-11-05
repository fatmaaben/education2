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
              Dashboard <FaTachometerAlt />
            </Link>
          </a>
        </li>
        <li>
          <a >
            <Link to="/student">
              Students <FaUserGraduate />
            </Link>
          </a>
        </li>
        <li>
          <a >
            <Link to="/teacher">
              Teachers <FaChalkboardTeacher />
            </Link>
          </a>
        </li>
        <li>
          <a >
          <Link to="/staff">
            Utilisateurs <FaUsers />
          </Link>
          </a>
        </li>
        <li>
          <a >
          <Link to="/classes">
            Class <FaClipboardList />
          </Link>
          </a>
        </li>
        <li>
          <a >
          <Link to="/absence">
            Attendance <FaCalendarCheck />
          </Link>
          </a>
        </li>
        <li>
          <a >
          <Link to="/dashboard">
            Deconnexion <FaSignOutAlt />
          </Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

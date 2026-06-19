import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './nav.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : { name: "Pinto", role: 'Student' };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container-fluid">
        
        <Link to={user.role === "Admin" ? "/AdminDashboard" : "/dashboard"} className='nav-link'>
          Complaint System
        </Link>
        
        <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            
            {/* Student View (Pinto) */}
            {user.role === "Student" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className='nav-link d-flex flex-column align-items-center'> 
                  <i className="bi bi-house-door fs-4"></i>Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/mycomplaint" className='nav-link d-flex flex-column align-items-center'> 
                  <i className="bi bi-card-text fs-4"></i>My Complaints
                </Link>
              </li>

              <li className="nav-item"> 
                <Link to="/Add" className='nav-link d-flex flex-column align-items-center'>
                  <i className="bi bi-file-earmark-plus fs-4"></i>Raise Complaint
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" onClick={handleLogout} className='nav-link d-flex flex-column align-items-center'>
                  <i className="bi bi-person fs-4"></i>Logout
                </Link>
              </li>
            </>
            )}

            {/* Admin View (Gokul) */}
            {user.role === "Admin" && (
            <>
              <li className="nav-item">
                <Link to="/AdminDashboard" className='nav-link d-flex flex-column align-items-center'> 
                  <i className="bi bi-house fs-4"></i>Admin Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/AdminComplaintList" className='nav-link d-flex flex-column align-items-center'>
                  <i className="bi bi-card-text fs-4"></i>Active Complaint
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" onClick={handleLogout} className='nav-link d-flex flex-column align-items-center'>
                  <i className="bi bi-person fs-4"></i>Logout
                </Link>
              </li>
            </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
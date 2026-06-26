import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './nav.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const user = { name: "Pinto", role: 'Student' };
//  const user = { name: "Gokul", role: 'Admin' };

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
                  <Link
                    to="/mycomplaints"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-card-text fs-4"></i>
                    My Complaints
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/view"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-pencil fs-4"></i>
                    Edit Complaints
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/add"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-file-earmark-plus fs-4"></i>
                    Raise Complaint
                  </Link>
                </li>

              <li className="nav-item">
                <Link to="/login" className='nav-link d-flex flex-column align-items-center'>
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
                <Link to="/login" className='nav-link d-flex flex-column align-items-center'>
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
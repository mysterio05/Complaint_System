import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './nav.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    axios.get("https://ccmsbackend.vercel.app/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      setUser(res.data.user);
    })
    .catch((err) => {
      console.error("Failed to fetch profile:", err);
      setUser(null);
    });
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  if (location.pathname === '/' || !user) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container-fluid">

        <Link
          to={user.role === "Admin" ? "/AdminDashboard" : "/dashboard"}
          className="navbar-brand"
        >
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

            <li className="nav-item d-flex align-items-center text-white me-3">
              <div>
                <strong>{user.name}</strong>
                <br />
                <small>{user.role}</small>
              </div>
            </li>

            {user.role === "Student" && (
              <>
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-house fs-4"></i>
                    Home
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
                  <Link
                    to="/profile"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn nav-link d-flex flex-column align-items-center text-white"
                  >
                    <i className="bi bi-box-arrow-right fs-4"></i>
                    Logout
                  </button>
                </li>
              </>
            )}

            {user.role === "Admin" && (
              <>
                <li className="nav-item">
                  <Link
                    to="/AdminDashboard"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-house fs-4"></i>
                    Admin Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/AdminComplaintList"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-card-text fs-4"></i>
                    Active Complaints
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn nav-link d-flex flex-column align-items-center text-white"
                  >
                    <i className="bi bi-box-arrow-right fs-4"></i>
                    Logout
                  </button>
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
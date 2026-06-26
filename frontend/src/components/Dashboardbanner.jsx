import React, { useEffect, useState } from 'react';
import './dashboardbanner.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from 'axios';

const Dashboardbanner = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      setUser(res.data.user);
    })
    .catch((err) => {
      console.error("Failed to load profile:", err);
    });
  }, []);

  if (!user) {
    return (
      <div className="dashboard-banner">
        <div className="banner-left">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-banner">

      {user.role === "Student" && (
        <div className="banner-left">
          <h2>Welcome Back, {user.name}</h2>

          <p>
            Track your complaints and their current status here.
          </p>

          <p className="sub-text">
            View pending issues, resolved complaints, and stay updated with your submissions.
          </p>
        </div>
      )}

      {user.role === "Admin" && (
        <div className="banner-left">
          <h2>Welcome Back Admin, {user.name}</h2>

          <p>
            Manage complaints and monitor their current status here.
          </p>

          <p className="sub-text">
            Review pending issues, update complaint statuses, and oversee the complaint management system.
          </p>
        </div>
      )}

    </div>
  );
};

export default Dashboardbanner;
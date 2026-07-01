import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DashboardCard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        // Get logged in user
        const profileRes = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const currentUser = profileRes.data.user;
        setUser(currentUser);

        let complaintsRes;

        // Student → only own complaints
        if (currentUser.role === "Student") {
          complaintsRes = await axios.get(
            `http://localhost:5000/api/complaints/user/${currentUser._id}`
          );
        }
        // Admin → all complaints
        else {
          complaintsRes = await axios.get(
            "http://localhost:5000/api/complaints"
          );
        }

        const complaints = complaintsRes.data;

        setStats({
          total: complaints.length,
          pending: complaints.filter(
            c => c.status === "Pending"
          ).length,
          inProgress: complaints.filter(
            c => c.status === "In Progress"
          ).length,
          resolved: complaints.filter(
            c => c.status === "Resolved"
          ).length
        });

      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-5">
        <h5>Loading Dashboard...</h5>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <div className="row g-3">

        {user.role === "Student" && (
          <>
            <div className="col-12 col-md-4">
              <div className="card shadow-sm border-start border-primary border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Total Complaints</p>
                  <h3 className="fw-bold">{stats.total}</h3>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Pending Complaints</p>
                  <h3 className="fw-bold">{stats.pending}</h3>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Resolved Complaints</p>
                  <h3 className="fw-bold">{stats.resolved}</h3>
                </div>
              </div>
            </div>
          </>
        )}

        {user.role === "Admin" && (
          <>
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-primary border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Total Complaints</p>
                  <h3 className="fw-bold">{stats.total}</h3>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Pending Complaints</p>
                  <h3 className="fw-bold">{stats.pending}</h3>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-warning border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">In Progress</p>
                  <h3 className="fw-bold">{stats.inProgress}</h3>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Resolved Complaints</p>
                  <h3 className="fw-bold">{stats.resolved}</h3>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default DashboardCard;
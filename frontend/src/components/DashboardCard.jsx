import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const DashboardCard = ({ complaints = [] }) => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const totalCount = complaints.length;
  const pendingCount = complaints.filter(c => c.status === 'Pending').length;
  const inProgressCount = complaints.filter(c => c.status === 'In Progress').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved').length;

  return (
    <div className="container mt-3">
      <div className="row g-3">
        {user && user.role === "Student" && (
          <>
            {/* Total */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-primary border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Total Complaints</p>
                  <h3 className="fw-bold">{totalCount}</h3>
                </div>
              </div>
            </div>

            {/* Pending */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Pending Complaints</p>
                  <h3 className="fw-bold">{pendingCount}</h3>
                </div>
              </div>
            </div>

            {/* Resolved */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Resolved Complaints</p>
                  <h3 className="fw-bold">{resolvedCount}</h3>
                </div>
              </div>
            </div>
          </>
        )}

        {user && user.role === "Admin" && (
          <>
            {/* Total */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-primary border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Total Complaints</p>
                  <h3 className="fw-bold">{totalCount}</h3>
                </div>
              </div>
            </div>

            {/* Pending */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Pending Complaints</p>
                  <h3 className="fw-bold">{pendingCount}</h3>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-warning border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">In Progress</p>
                  <h3 className="fw-bold">{inProgressCount}</h3>
                </div>
              </div>
            </div>

            {/* Resolved */}
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <p className="text-muted mb-1">Resolved Complaints</p>
                  <h3 className="fw-bold">{resolvedCount}</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCard
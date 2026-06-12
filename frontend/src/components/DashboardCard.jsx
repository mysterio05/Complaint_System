import React from 'react'

const DashboardCard = () => {
  return (
  
    <div className="container mt-3">
      <div className="row g-3">

        {/* Total */}
        <div className="col-12 col-md-3">
          <div className="card shadow-sm border-start border-primary border-4">
            <div className="card-body">
              <p className="text-muted mb-1">Total Complaints</p>
              <h3 className="fw-bold">120</h3>
            </div>
          </div>
        </div>

       

        {/* Pending */}
        <div className="col-12 col-md-3">
          <div className="card shadow-sm border-start border-danger border-4">
            <div className="card-body">
              <p className="text-muted mb-1">Pending Complaints</p>
              <h3 className="fw-bold">30</h3>
            </div>
          </div>
        </div>

        {/* Resolved */}
        <div className="col-12 col-md-3">
          <div className="card shadow-sm border-start border-success border-4">
            <div className="card-body">
              <p className="text-muted mb-1">Resolved Complaints</p>
              <h3 className="fw-bold">45</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCard
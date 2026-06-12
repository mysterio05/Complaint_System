import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const DashboardCard = () => {

   const user={
    name:"Gokul",
    role:'Admin'

   }

  //  const user={
  //   name:"Pinto",
  //   role:'Student'
    
  //  }

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
          </>
       )}

       {user && user.role === "Admin" && (
        <>
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

        {/* In Progress  */}
        <div className="col-12 col-md-3">
          <div className="card shadow-sm border-start border-warning border-4">
            <div className="card-body">
              <p className="text-muted mb-1">In Progress</p>
              <h3 className="fw-bold">145</h3>
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
          </>
       )}


      </div>
    </div>
  );
};

export default DashboardCard
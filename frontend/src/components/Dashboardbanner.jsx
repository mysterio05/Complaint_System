import React from 'react'
import './dashboardbanner.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Dashboardbanner = () => {

  // const user={
  //   name:"Gokul",
  //   role:'Admin'

  //  }

   const user={
    name:"Pinto",
    role:'Student'
    
   }


  return (
     <div className="dashboard-banner">
      
      {/* LEFT SIDE */}
       {user && user.role === "Student" && (
        <>
      <div className="banner-left">
        <h2>Welcome Back, {user.name} 👋</h2>

        <p>
          Track your complaints and their current status here.
        </p>

        <p className="sub-text">
          View pending issues, resolved complaints, and stay updated with your submissions.
        </p>

    
      </div>

   
       </>
       )}

       {user && user.role === "Admin" && (
        <>
      <div className="banner-left">
        <h2>Welcome Back Admin, {user.name} 👋</h2>

        <p>
          Track your complaints and their current status here.
        </p>

        <p className="sub-text">
          View pending issues, resolved complaints, and stay updated with your submissions.
        </p>

    
      </div>

   
       </>
       )}
    </div>
  )
}

export default Dashboardbanner
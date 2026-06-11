import React from 'react'
import './Dashboardbanner.css';
import { Link } from 'react-router-dom';
const Dashboardbanner = () => {

  const user={
    name:"Gokul",
    role:'Admin'

   }

  //  const user={
  //   name:"Pinto",
  //   role:'Student'
    
  //  }


  return (
     <div className="dashboard-banner">
      
      {/* LEFT SIDE */}
       {user && user.role === "Student" && (
        <>
      <div className="banner-left">
        <h2>Welcome Back, Pinto 👋</h2>

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
        <h2>Welcome Back, GoKul 👋</h2>

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
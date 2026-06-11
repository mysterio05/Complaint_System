import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './nav.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
   
  const user={
    name:"Gokul",
    role:'Admin'

   }

  //  const user={
  //   name:"Pinto",
  //   role:'Student'
    
  //  }


  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container-fluid">
        
        <Link to={user ? (user.role==="Admin"? "/AdminDashboard":"/Dashboard"):"/login"} className='nav-link'>Complaint System</Link>
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
            {user && user.role === "Student" && (
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
              <Link to="/raisecomplaint" className='nav-link d-flex flex-column align-items-center'>
               <i className="bi bi-file-earmark-plus fs-4"></i>
              Raise Complaint
              </Link>
                
            
            </li>

            <li className="nav-item ">
                <Link to="/login" className='nav-link d-flex flex-column align-items-center'>
                <i className="bi bi-person fs-4"></i>
                Logout</Link>
            </li>

            </>
            )}

            {user && user.role === "Admin" && (
            <>
            <li className="nav-item">
              <Link to="/AdminDashboard" className='nav-link d-flex flex-column align-items-center'> 
              <i className="bi bi-house fs-4"></i>Admin Home
              </Link>
               
            </li>

             <li className="nav-item">
              <Link to="/Activecomplaint" className='nav-link d-flex flex-column align-items-center'>
               <i className="bi bi-card-text fs-4"></i>Active Complaint
              </Link>
               
            </li>

            <li className="nav-item ">
                <Link to="/login" className='nav-link d-flex flex-column align-items-center'>
                <i className="bi bi-person fs-4"></i>
                Logout</Link>
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
import React from 'react'
import './ComplaintDetails.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ComplaintDetails = () => {
  return (
    <div>
        <br/>
        <h1>&nbsp;Complaint Details</h1>
        &nbsp;&nbsp;&nbsp;<a href="http://localhost:5173/mycomplaints" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i>Back to My complaints
        </a><br/><br/>
        <div className="card m-3 shadow-sm">
          <div className="card-body">
            <div className="d-flex">
             <div className="icon-circle">
                 <i className="bi bi-clipboard-data complaint-icon"></i>
             </div>
             <div className='my-2'>
                <h5 className="fw-bold mb-1">WiFi Not Working</h5>
                <strong className="fw-semibold detail">Category: Internet</strong>
                <span className="mx-3 text-muted">|</span>
                <strong className="fw-semibold detail">Location: Computer Lab 3</strong><br />
                <small className="text-muted">
                    <i className="bi bi-calendar-event me-1"></i>Submitted on: 05-Jun-2026
                </small>
             </div>
            </div>
              <hr className="mb-4"/>
              <strong className="fw-semibold">Status: </strong>
              <span className="status-box">Resolved</span><br/><br/>
              <strong className="fw-semibold">Description</strong>
              <p>Internet connectivity is unavailable in Computer Lab 3. Students are unable to access online resources during practical sessions.</p>
              <strong className="fw-semibold">Resolution Details</strong>
              <p>The issue has been fixed.Ther will not be any difficulties regarding this issue anymore.Thank you for your patience</p>
          </div>
        </div>
        
    </div>
  )
}

export default ComplaintDetails
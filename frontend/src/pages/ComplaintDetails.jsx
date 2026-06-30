import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ComplaintDetails.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/complaints/${id}`)
      .then((res) => {
        setComplaint(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h4>Loading Complaint...</h4>
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="container mt-5 text-center">
        <h4>Complaint Not Found</h4>
      </div>
    );
  }

  return (
    <div>
      <br />

      <h1>&nbsp;Complaint Details</h1>

      &nbsp;&nbsp;&nbsp;
      <Link to="/mycomplaints" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back to My Complaints
      </Link>

      <br />
      <br />

      <div className="card m-3 shadow">
        <div className="card-body">

          <div className="d-flex">
            <div className="icon-circle">
              <i className="bi bi-clipboard-data complaint-icon"></i>
            </div>

            <div className="my-2">
              <h5 className="fw-bold mb-1">{complaint.title}</h5>

              <strong className="fw-semibold detail">
                Category: {complaint.category}
              </strong>

              <span className="mx-3 text-muted">|</span>

              <strong className="fw-semibold detail">
                Location: {complaint.location}
              </strong>

              <br />

              <small className="text-muted">
                <i className="bi bi-calendar-event me-1"></i>
                Submitted on:
                {" "}
                {complaint.createdDate
                  ? new Date(complaint.createdDate).toLocaleDateString()
                  : "N/A"}
              </small>
            </div>
          </div>

          <hr className="mb-4" />

          <strong className="fw-semibold">Status: </strong>

          <span
            className={`status-box ${
              complaint.status === "Resolved"
                ? "bg-success text-white"
                : complaint.status === "In Progress"
                ? "bg-warning text-dark"
                : "bg-danger text-white"
            }`}
          >
            {complaint.status}
          </span>

          <br />
          <br />

          <strong className="fw-semibold">Description</strong>

          <p>{complaint.description}</p>

        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
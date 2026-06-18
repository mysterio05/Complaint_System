import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyComplaints.css';
import axios from 'axios';

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/complaints')
      .then(res => setComplaints(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        <br/>
        <h1>&nbsp;My Complaints</h1>
        <p className='ms-3'>View all the complaints you have submitted</p><br/>
        <div className="p-3">
        <table className="table table-bordered complaints-table shadow-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date Submitted</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((item) => (
              <tr key={item._id}>
                <td>{item._id.slice(-6)}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>{item.createdDate ? new Date(item.createdDate).toLocaleDateString() : "N/A"}</td>
                <td>{item.status}</td>
                <td>
                  <a href="/complaintdetails" className="text-decoration-none">View Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br/>
    </div>
  )
}

export default MyComplaints
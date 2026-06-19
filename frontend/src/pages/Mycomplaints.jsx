import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyComplaints.css'

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        const userId = localStorage.getItem("userId");

        axios
            .get(`http://localhost:5000/complaints/mycomplaints/${userId}`)
            .then((res) => {
                setComplaints(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>{new Date(item.createdDate).toLocaleDateString()}</td>
                <td>{item.status}</td>
                <Link to={`/complaintdetails/${item._id}`} className="text-decoration-none">View Details</Link>
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
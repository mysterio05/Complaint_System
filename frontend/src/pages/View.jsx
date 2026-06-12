import React from 'react';
import { Link } from 'react-router-dom';

const View = ({ complaints, setComplaints }) => {
  
  const handleDelete = (index) => {
    const updated = complaints.filter((_, i) => i !== index);
    setComplaints(updated);
  };

  return (
    <div className="container mt-5">
      <h2>My Complaints</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Displaying Index as ID */}
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.location}</td>
              <td>{item.date || "2026-06-11"}</td> {/* Placeholder for Date */}
              <td>{item.status || "Pending"}</td>
              <td>
                <Link to={`/update/${index}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
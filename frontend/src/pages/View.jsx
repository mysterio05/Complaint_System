import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const View = () => {

  const [complaints, setComplaints] = useState([]);

  
  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/complaints');
      setComplaints(res.data); 
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/complaints/${id}`);
      setComplaints(complaints.filter(item => item._id !== id)); // Instantly remove from screen
    } catch (error) {
      console.error("Error deleting complaint:", error);
    }
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
          {complaints.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">No complaints found.</td>
            </tr>
          ) : (
            complaints.map((item) => (
              <tr key={item._id}>
                <td>{item._id.slice(-6)}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>{item.createdDate ? new Date(item.createdDate).toLocaleDateString() : "N/A"}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/update/${item._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default View;
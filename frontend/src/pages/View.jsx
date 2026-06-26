import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from "../config";

const View = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      try {
        const res = await axios.get(`${API_BASE_URL}/complaints/user/${userId}`);
        setComplaints(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComplaints();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/complaints/${id}`);
      setComplaints(complaints.filter(item => item._id !== id));
    } catch (error) {
      console.error(error);
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
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length === 0 ? (
            <tr><td colSpan="6" className="text-center">No complaints found.</td></tr>
          ) : (
            complaints.map((item) => (
              <tr key={item._id}>
                <td>{item._id.slice(-6)}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>{item.status}</td>
                <td>
                  {item.status === 'Pending' ? (
                    <>
                      <Link to={`/update/${item._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                      <button onClick={() => handleDelete(item._id)} className="btn btn-danger btn-sm">Delete</button>
                    </>
                  ) : (
                    <span className="text-muted">Reviewed</span>
                  )}
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
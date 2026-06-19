import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    category: '',
    location: '',
    description: '',
    status: ''
  });

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/complaints/${id}`);
        setForm(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComplaint();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, form);
      navigate('/mycomplaint');
    } catch (error) {
      alert("Failed to update complaint");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Update Complaint</h2>
      <form onSubmit={handleUpdate}>
        <input className="form-control mb-2" name="title" value={form.title} onChange={handleChange} required />
        <select className="form-control mb-2" name="category" value={form.category} onChange={handleChange}>
          <option value="Classroom">Classroom</option>
          <option value="Laboratory">Laboratory</option>
          <option value="Hostel">Hostel</option>
          <option value="Library">Library</option>
          <option value="Internet/Wi-Fi">Internet/Wi-Fi</option>
          <option value="Electrical">Electrical</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Cleanliness">Cleanliness</option>
          <option value="Other">Other</option>
        </select>
        <input className="form-control mb-2" name="location" value={form.location} onChange={handleChange} required />
        <textarea className="form-control mb-2" name="description" value={form.description} onChange={handleChange} rows="3" required />
        <select className="form-control mb-2" name="status" value={form.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <button type="submit" className="btn btn-warning">Update Complaint</button>
      </form>
    </div>
  );
};

export default Update;
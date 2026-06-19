import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from "../config";

const Add = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    category: 'Classroom',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');

    
    try {
      await axios.post(`${API_BASE_URL}/complaints`, { ...form, createdBy: userId });
      navigate('/mycomplaint');
    } catch (error) {
      console.error("Submission failed:", error.response?.data || error.message);
    }
};

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Submit Complaint</h2>
      <form onSubmit={handleSave}>
        <input className="form-control mb-2" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
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
        <input className="form-control mb-2" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <textarea className="form-control mb-2" name="description" placeholder="Description" value={form.description} onChange={handleChange} rows="3" required />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Add;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/complaints', form);
      navigate('/view');
    } catch (error) {
      console.error("Error adding complaint:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-control" name="category" value={form.category} onChange={handleChange}>
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
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" value={form.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={form.description} onChange={handleChange} rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Complaint</button>
      </form>
    </div>
  );
};

export default Add;
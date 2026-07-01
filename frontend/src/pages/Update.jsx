import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config';

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
        const res = await axios.get(`${API_BASE_URL}/complaints/${id}`);
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

  const handleSave = async () => {
    try {
      await axios.put(`${API_BASE_URL}/complaints/${id}`, form);
      navigate('/view');
    } catch (error) {
      console.error("Error updating complaint:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Edit Complaint</h2>
      <input className="form-control mb-2" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
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
      <input className="form-control mb-2" name="location" value={form.location} onChange={handleChange} placeholder="Location" />
      <textarea className="form-control mb-2" name="description" value={form.description} onChange={handleChange} rows="3" placeholder="Detailed Description" />
      <button className="btn btn-success" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default Update;
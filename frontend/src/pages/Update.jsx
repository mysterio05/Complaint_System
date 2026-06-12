import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = ({ complaints, setComplaints }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [form, setForm] = useState(complaints[id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedList = [...complaints];
    updatedList[id] = form;
    setComplaints(updatedList);
    navigate('/mycomplaint');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Edit Complaint</h2>
      
      {/* Title */}
      <input className="form-control mb-2" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      
      {/* Category Selection */}
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

      {/* Location */}
      <input className="form-control mb-2" name="location" value={form.location} onChange={handleChange} placeholder="Location" />

      {/* Description Area */}
      <textarea className="form-control mb-2" name="description" value={form.description} onChange={handleChange} placeholder="Detailed Description" rows="3" />
      
      <button className="btn btn-success" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default Update;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from "../config";
import './Add.css';

const Add = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    category: 'Classroom',
    location: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    setLoading(true);
    setError(null);
    
    try {
      await axios.post(`${API_BASE_URL}/complaints`, { ...form, createdBy: userId });
      navigate('/view');
    } catch (error) {
      console.error("Submission failed:", error.response?.data || error.message);
      setError(error.response?.data?.error || error.response?.data?.message || "Failed to submit complaint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-complaint-wrapper">
      {/* Decorative Blur Blobs */}
      <div className="add-decor-blob add-decor-blob-1"></div>
      <div className="add-decor-blob add-decor-blob-2"></div>

      <div className="add-complaint-card">
        <div className="add-complaint-header">
          <h2>Submit Complaint</h2>
          <p>Lodge your concern or feedback. We will look into it promptly.</p>
        </div>

        {error && (
          <div className="complaint-alert complaint-alert-error">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSave}>
          <div className="complaint-form-group">
            <label className="complaint-field-label">Complaint Title</label>
            <div className="input-icon-wrapper">
              <input 
                className="complaint-input" 
                name="title" 
                placeholder="Brief summary of the issue..." 
                value={form.title} 
                onChange={handleChange} 
                required 
              />
              <i className="bi bi-pencil-square"></i>
            </div>
          </div>

          <div className="complaint-form-group">
            <label className="complaint-field-label">Category</label>
            <div className="input-icon-wrapper">
              <select 
                className="complaint-input" 
                name="category" 
                value={form.category} 
                onChange={handleChange}
              >
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
              <i className="bi bi-tag"></i>
            </div>
          </div>

          <div className="complaint-form-group">
            <label className="complaint-field-label">Location</label>
            <div className="input-icon-wrapper">
              <input 
                className="complaint-input" 
                name="location" 
                placeholder="Where is the issue located? (e.g. Block A, Room 102)" 
                value={form.location} 
                onChange={handleChange} 
                required 
              />
              <i className="bi bi-geo-alt"></i>
            </div>
          </div>

          <div className="complaint-form-group">
            <label className="complaint-field-label">Detailed Description</label>
            <div className="input-icon-wrapper">
              <textarea 
                className="complaint-input" 
                name="description" 
                placeholder="Provide details about the issue to help us resolve it..." 
                value={form.description} 
                onChange={handleChange} 
                rows="4" 
                required 
              />
              <i className="bi bi-text-left"></i>
            </div>
          </div>

          <div className="complaint-actions">
            <button 
              type="button" 
              className="btn-complaint-cancel"
              onClick={() => navigate('/dashboard')}
              disabled={loading}
            >
              <i className="bi bi-x-circle"></i>
              Cancel
            </button>
            
            <button 
              type="submit" 
              className="btn-complaint-submit" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="bi bi-send-check"></i>
                  Submit Complaint
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
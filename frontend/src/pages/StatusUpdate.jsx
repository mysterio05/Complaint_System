import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from '../config'

const StatusUpdate = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [complaint, setComplaint] = useState(null)
  const [status, setStatus] = useState('')
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/complaints/${id}`);
        setComplaint(res.data);
        setStatus(res.data.status);
      } catch (error) {
        console.error("Error fetching complaint details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComplaint();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`${API_BASE_URL}/admin/complaints/${id}`, { status });
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        navigate('/AdminComplaintList');
      }, 1500);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  }

  if (loading) {
    return <div className='container mt-4'><h4>Loading complaint details...</h4></div>
  }

  if (!complaint) {
    return <div className='container mt-4'><h4>Complaint not found.</h4></div>
  }

  return (
    <div className='container mt-4' style={{ maxWidth: '600px' }}>
      <button className='btn btn-secondary mb-3' onClick={() => navigate('/AdminComplaintList')}>
        ← Back to List
      </button>

      <div className='card shadow'>
        <div className='card-body'>
          <h4 className='card-title text-primary mb-4'>Update Complaint Status</h4>

          {/* Complaint Details */}
          <div className='mb-3'>
            <label className='fw-bold'>Title</label>
            <p className='form-control-plaintext'>{complaint.title}</p>
          </div>
          <div className='mb-3'>
            <label className='fw-bold'>Description</label>
            <p className='form-control-plaintext'>{complaint.description}</p>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <label className='fw-bold'>Category</label>
              <p className='form-control-plaintext'>{complaint.category}</p>
            </div>
            <div className='col'>
              <label className='fw-bold'>Location</label>
              <p className='form-control-plaintext'>{complaint.location}</p>
            </div>
          </div>
          <div className='mb-3'>
            <label className='fw-bold'>Date Submitted</label>
            <p className='form-control-plaintext'>
              {complaint.createdDate ? new Date(complaint.createdDate).toLocaleDateString() : ''}
            </p>
          </div>

          {/* Status Dropdown */}
          <div className='mb-4'>
            <label className='fw-bold'>Update Status</label>
            <select className='form-select mt-1' value={status} onChange={e => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          {/* Save Button */}
          <button className='btn btn-primary w-100' onClick={handleSave}>
            Save Status
          </button>

          {/* Success Message */}
          {saved && (
            <div className='alert alert-success mt-3'>
              Status updated to <strong>{status}</strong> successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StatusUpdate
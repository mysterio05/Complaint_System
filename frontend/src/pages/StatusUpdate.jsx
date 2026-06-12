import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const dummyComplaints = [
  { id: 1, title: 'Broken AC', category: 'Classroom', location: 'Block A Room 101', date: '2026-06-01', status: 'Pending', description: 'The AC in Room 101 has been broken for 2 weeks.' },
  { id: 2, title: 'No Hot Water', category: 'Hostel', location: 'Hostel B', date: '2026-06-03', status: 'In Progress', description: 'Hot water has not been available in Hostel B.' },
  { id: 3, title: 'Broken Projector', category: 'Laboratory', location: 'Lab Block Room 202', date: '2026-06-05', status: 'Resolved', description: 'Projector in Lab 202 is not working.' },
  { id: 4, title: 'Dirty Washrooms', category: 'Cleanliness', location: 'Main Block Ground Floor', date: '2026-06-07', status: 'Pending', description: 'Washrooms are not being cleaned regularly.' },
  { id: 5, title: 'Flickering Lights', category: 'Electrical', location: 'Hostel A Corridor', date: '2026-06-08', status: 'In Progress', description: 'Lights in Hostel A corridor keep flickering.' },
  { id: 6, title: 'No WiFi in Library', category: 'Internet/Wi-Fi', location: 'Central Library', date: '2026-06-09', status: 'Pending', description: 'WiFi has been down in the library for 3 days.' },
  { id: 7, title: 'Water Leakage', category: 'Water Supply', location: 'Block C 2nd Floor', date: '2026-06-09', status: 'Resolved', description: 'Water leaking from the ceiling near staircase.' },
  { id: 8, title: 'Missing Books', category: 'Library', location: 'Central Library', date: '2026-06-10', status: 'Pending', description: 'Several reference books are missing from shelves.' },
  { id: 9, title: 'Broken Lab Equipment', category: 'Laboratory', location: 'Physics Lab', date: '2026-06-10', status: 'In Progress', description: 'Several lab instruments are damaged and need replacement.' },
  { id: 10, title: 'Dirty Cafeteria', category: 'Other', location: 'Main Cafeteria', date: '2026-06-11', status: 'Pending', description: 'Cafeteria is not being cleaned regularly.' },
]

const StatusUpdate = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const complaint = dummyComplaints.find(c => c.id === parseInt(id))
  const [status, setStatus] = useState(complaint ? complaint.status : '')
  const [saved, setSaved] = useState(false)

  if (!complaint) {
    return <div className='container mt-4'><h4>Complaint not found.</h4></div>
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className='container mt-4' style={{ maxWidth: '600px' }}>
      <button className='btn btn-secondary mb-3' onClick={() => navigate('/admin')}>
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
            <p className='form-control-plaintext'>{complaint.date}</p>
          </div>

          {/* Status Dropdown */}
          <div className='mb-4'>
            <label className='fw-bold'>Update Status</label>
            <select className='form-select mt-1' value={status} onChange={e => setStatus(e.target.value)}>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Resolved</option>
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
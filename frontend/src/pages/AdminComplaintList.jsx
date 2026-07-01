import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const statusBadge = {
  'Pending': 'warning',
  'In Progress': 'primary',
  'Resolved': 'success',
}

const AdminComplaintList = () => {
  const [complaints, setComplaints] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')

  useEffect(() => {
    fetchComplaints()
  }, [])

  const fetchComplaints = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/complaints')
      setComplaints(res.data)
    } catch (error) {
      console.error('Error fetching complaints:', error)
    }
  }

  const filtered = complaints.filter(c => {
    return (
      (categoryFilter === '' || c.category === categoryFilter) &&
      (statusFilter === '' || c.status === statusFilter) &&
      (dateFilter === '' || c.createdDate?.slice(0, 10) === dateFilter)
    )
  })

  return (
    <div className='container mt-5'>
      <div className='mb-4'>
        <h2 className='fw-bold'>Complaint Management</h2>
        <p className='text-muted'>Manage and resolve campus complaints</p>
      </div>

      <div className='card shadow-sm'>
        <div className='card-body'>
          <div className='row mb-4 g-2'>
            <div className='col-md-3'>
              <select className='form-select' value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
                <option value=''>All Categories</option>
                <option>Classroom</option>
                <option>Laboratory</option>
                <option>Hostel</option>
                <option>Library</option>
                <option>Internet/Wi-Fi</option>
                <option>Electrical</option>
                <option>Water Supply</option>
                <option>Cleanliness</option>
                <option>Other</option>
              </select>
            </div>
            <div className='col-md-3'>
              <select className='form-select' value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value=''>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
            <div className='col-md-3'>
              <input className='form-control' type='date' value={dateFilter} onChange={e => setDateFilter(e.target.value)} />
            </div>
            <div className='col-md-3'>
              <button className='btn btn-outline-secondary w-100' onClick={() => { setCategoryFilter(''); setStatusFilter(''); setDateFilter('') }}>
                Clear Filters
              </button>
            </div>
          </div>

          <div className='table-responsive'>
            <table className='table table-hover align-middle'>
              <thead style={{ backgroundColor: '#1a1a2e', color: 'white' }}>
                <tr>
                  <th className='px-3'>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c._id}>
                    <td className='px-3 text-muted'>#{c._id.slice(-4)}</td>
                    <td className='fw-medium'>{c.title}</td>
                    <td>{c.category}</td>
                    <td>{c.location}</td>
                    <td>{c.createdDate ? new Date(c.createdDate).toLocaleDateString() : 'N/A'}</td>
                    <td>
                      <span className={`badge bg-${statusBadge[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/admin/update/${c._id}`} className='btn btn-sm btn-outline-primary'>Update</Link>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={7} className='text-center text-muted py-4'>No complaints found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminComplaintList
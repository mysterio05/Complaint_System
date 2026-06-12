import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

const statusBadge = {
  'Pending': 'warning',
  'In Progress': 'primary',
  'Resolved': 'success',
}

const AdminComplaintList = () => {
  const [categoryFilter, setCategoryFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')

  const filtered = dummyComplaints.filter(c => {
    return (
      (categoryFilter === '' || c.category === categoryFilter) &&
      (statusFilter === '' || c.status === statusFilter) &&
      (dateFilter === '' || c.date === dateFilter)
    )
  })

  return (
    <div className='container mt-5'>

      {/* Page Header */}
      <div className='mb-4'>
        <h2 className='fw-bold'>Complaint Management</h2>
        <p className='text-muted'>Manage and resolve campus complaints</p>
      </div>

      {/* Main Card */}
      <div className='card shadow-sm'>
        <div className='card-body'>

          {/* Filter Row */}
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

          {/* Table */}
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
                  <tr key={c.id}>
                    <td className='px-3 text-muted'>#{c.id}</td>
                    <td className='fw-medium'>{c.title}</td>
                    <td>{c.category}</td>
                    <td>{c.location}</td>
                    <td>{c.date}</td>
                    <td>
                      <span className={`badge bg-${statusBadge[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/admin/update/${c.id}`} className='btn btn-sm btn-outline-primary'>Update</Link>
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
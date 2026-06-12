import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Add = ({ complaints, setComplaints }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    location: ''
  })

  const valueUpdate = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitInfo = (e) => {
    e.preventDefault()
    
  
    setComplaints([...complaints, form])
    
    console.log("Form submitted:", form)
    alert("Complaint logged successfully!")
    navigate('/view')
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4 fw-bold">Raise Complaint</h3>
        
        <form onSubmit={submitInfo}>
          
          <div className="mb-3">
            <label className="form-label fw-semibold">Complaint Title</label>
            <input 
              type="text" 
              className="form-control" 
              name="title" 
              required
              value={form.title} 
              onChange={valueUpdate} 
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select 
              className="form-select" 
              name="category" 
              required
              value={form.category} 
              onChange={valueUpdate}
            >
              <option value="">Select Category</option>
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
            <label className="form-label fw-semibold">Location</label>
            <input 
              type="text" 
              className="form-control" 
              name="location" 
              required
              value={form.location} 
              onChange={valueUpdate} 
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Detailed Description</label>
            <textarea 
              className="form-control" 
              rows="4" 
              name="description" 
              required
              value={form.description} 
              onChange={valueUpdate}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
            Save Record
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default Add
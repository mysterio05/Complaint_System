import React, { useState } from 'react'

const View = () => {
  
  const [complaints, setComplaints] = useState([
    { title: 'Wi-Fi not working in library', category: 'Internet/Wi-Fi', location: 'Library Area B', description: 'Signal dropping constantly' },
    { title: 'Projector bulb broken', category: 'Classroom', location: 'Room 302', description: 'Screen flickering red' }
  ])

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h3 className="mb-4 fw-bold">Complaint Information Directory</h3>
        
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Location</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((item, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{item.title}</td>
                  <td>
                    <span className="badge bg-secondary px-2.5 py-1.5">{item.category}</span>
                  </td>
                  <td>{item.location}</td>
                  <td className="text-muted">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default View
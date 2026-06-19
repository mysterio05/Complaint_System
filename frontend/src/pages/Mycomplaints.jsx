import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyComplaints.css'

const MyComplaints = () => {
  const complaints = [
 {
  id: "CC-2026-001",
  title: "WiFi Not Working",
  category: "Internet",
  location: "Computer Lab 3",
  date: "10-Jun-2026",
  status: "Pending",
 },
 {
  id: "CC-2026-002",
  title: "Classroom Projector Issue",
  category: "Classroom",
  location: "Room 101",
  date: "08-Jun-2026",
  status: "In Progress",
 },
 {
  id: "CC-2026-003",
  title: "Hostel Water Leakage",
  category: "Hostel",
  location: "Block A - Room 204",
  date: "05-Jun-2026",
  status: "Resolved",
 },
 {
  id: "CC-2026-004",
  title: "Library Lights Not Working",
  category: "Library",
  location: "Reading Hall",
  date: "01-Jun-2026",
  status: "Pending",
 },
 {
  id: "CC-2026-005",
  title: "Broken Laboratory Equipment",
  category: "Laboratory",
  location: "Biology Lab",
  date: "12-Jun-2026",
  status: "In Progress",
 },
 {
  id: "CC-2026-006",
  title: "Fan Not Working in Reception Area",
  category: "Electrical",
  location: "Reception Area",
  date: "14-Jun-2026",
  status: "Pending",
 }
];

  return (
    <div>
        <br/>
        <h1>&nbsp;My Complaints</h1>
        <p className='ms-3'>View all the complaints you have submitted</p><br/>
        <div className="p-3">
        <table className="table table-bordered complaints-table shadow-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date Submitted</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>
                  <a href="http://localhost:5173/complaintdetails" className="text-decoration-none">View Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br/>
    </div>
  )
}

export default MyComplaints
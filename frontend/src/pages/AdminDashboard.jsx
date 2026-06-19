import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API_BASE_URL from '../config'
import Dashboardbanner from '../components/Dashboardbanner'
import DashboardCard from '../components/DashboardCard'
import ComplaintChart from '../components/ComplaintChart'

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/admin/complaints`)
      .then(res => setComplaints(res.data))
      .catch(err => console.error("Error fetching admin complaints:", err));
  }, []);

  const categories = [
    "Classroom", "Laboratory", "Hostel", "Library", "Internet/Wi-Fi",
    "Electrical", "Water Supply", "Cleanliness", "Other"
  ];

  const data = categories.map(cat => ({
    category: cat,
    complaints: complaints.filter(c => c.category === cat).length
  }));

  return (
    <div>
      <Dashboardbanner />
      <DashboardCard complaints={complaints} />
      <ComplaintChart complaint={data} />
    </div>
  )
}

export default AdminDashboard
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API_BASE_URL from '../config'
import Dashboardbanner from '../components/Dashboardbanner'
import DashboardCard from '../components/DashboardCard'
import ComplaintChart from '../components/ComplaintChart'

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;
    axios.get(`${API_BASE_URL}/complaints/user/${userId}`)
      .then(res => setComplaints(res.data))
      .catch(err => console.error("Error fetching student complaints:", err));
  }, [userId]);

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

export default Dashboard
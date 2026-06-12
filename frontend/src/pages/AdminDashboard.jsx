import React from 'react'
import Dashboardbanner from '../components/Dashboardbanner'
import DashboardCard from '../components/DashboardCard'
import ComplaintChart from '../components/ComplaintChart'
const AdminDashboard = () => {
  return (
    <div>
      <Dashboardbanner />
      <DashboardCard />
      <ComplaintChart />
      </div>
  )
}

export default AdminDashboard
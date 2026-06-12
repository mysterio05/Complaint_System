import React from 'react'
import Navbar from '../components/Navbar'
import Dashboardbanner from '../components/Dashboardbanner'
import DashboardCard from '../components/DashboardCard'
import ComplaintChart from '../components/ComplaintChart'

const Dashboard = () => {
  return (
    <div>
  
  
      <Dashboardbanner />
      <DashboardCard />
      <ComplaintChart/>
    </div>
    
  )
}

export default Dashboard
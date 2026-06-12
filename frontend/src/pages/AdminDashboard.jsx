import React from 'react'
import Dashboardbanner from '../components/Dashboardbanner'
import DashboardCard from '../components/DashboardCard'
import ComplaintChart from '../components/ComplaintChart'
const AdminDashboard = () => {
    const data = [
      { category: "Classroom", complaints: 10 },
      { category: "Laboratory", complaints: 8 },
      { category: "Hostel", complaints: 6 },
      { category: "Library", complaints: 4 },
      { category: "Wi-Fi", complaints: 12 },
      { category: "Electrical", complaints: 5 },
      { category: "Water", complaints: 3 },
      { category: "Clean", complaints: 7 },
      { category: "Other", complaints: 2 }
    ];
  return (
    <div>
      <Dashboardbanner />
      <DashboardCard />
       <ComplaintChart complaint={data}/>
      </div>
  )
}

export default AdminDashboard
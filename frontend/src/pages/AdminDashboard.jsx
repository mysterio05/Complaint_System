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

<<<<<<< HEAD
export default AdminDashboard
=======
      {loading ? (
        <div className="text-center mt-4">
          <h5>Loading chart...</h5>
        </div>
      ) : (
        <ComplaintChart complaint={data} />
      )}
    </>
  );
};

export default AdminDashboard;
>>>>>>> 0575769 (module 3 and dashboard fix)

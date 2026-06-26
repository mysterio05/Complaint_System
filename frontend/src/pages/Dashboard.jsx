import React from 'react'
import Navbar from '../components/Navbar'
import Dashboardbanner from '../components/Dashboardbanner'
import DashboardCard from '../components/DashboardCard'
import ComplaintChart from '../components/ComplaintChart'

const Dashboard = () => {
<<<<<<< HEAD
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
=======
  const [data, setData] = useState([]);

  useEffect(() => {
  const userId = localStorage.getItem('userId');

  axios
    .get(`http://localhost:5000/api/complaints/user/${userId}`)
    .then((res) => {
      const complaints = res.data;

      const categoryCount = {};

      complaints.forEach((item) => {
        const category = item.category || "Other";
        categoryCount[category] =
          (categoryCount[category] || 0) + 1;
      });

      const chartData = Object.entries(categoryCount).map(
        ([category, complaints]) => ({
          category,
          complaints,
        })
      );

      setData(chartData);
    })
    .catch((err) => console.error("Dashboard Error:", err));
    }, []);
>>>>>>> 0575769 (module 3 and dashboard fix)
  return (
    <div>
  
  
      <Dashboardbanner />
      <DashboardCard />
      <ComplaintChart complaint={data}/>
    </div>
    
  )
}

export default Dashboard
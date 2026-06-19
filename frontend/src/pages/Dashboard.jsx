import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Dashboardbanner from '../components/Dashboardbanner';
import DashboardCard from '../components/DashboardCard';
import ComplaintChart from '../components/ComplaintChart';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/complaints')
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
            complaints
          })
        );

        setData(chartData);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Dashboardbanner />
      <DashboardCard complaints={complaints} />
      <ComplaintChart complaint={data} />
    </div>
  )
}

export default Dashboard
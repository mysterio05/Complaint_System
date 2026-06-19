import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Dashboardbanner from '../components/Dashboardbanner';
import DashboardCard from '../components/DashboardCard';
import ComplaintChart from '../components/ComplaintChart';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(
        'http://localhost:5000/api/complaints'
      );

      const complaints = res.data;

      const categoryCount = {};

      complaints.forEach((complaint) => {
        const category = complaint.category || 'Other';

        categoryCount[category] =
          (categoryCount[category] || 0) + 1;
      });

      const chartData = Object.entries(categoryCount).map(
        ([category, count]) => ({
          category,
          complaints: count
        })
      );

      setData(chartData);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dashboardbanner />
      <DashboardCard />

      {loading ? (
        <div className="text-center mt-4">
          <h5>Loading chart...</h5>
        </div>
      ) : (
        <ComplaintChart data={data} />
      )}
    </>
  );
};

export default AdminDashboard;
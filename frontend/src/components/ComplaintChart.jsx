import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const ComplaintChart = () => {
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
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h6 className="fw-bold mb-3">Category-wise Complaints</h6>

        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="category"
              tick={{ fontSize: 10 }}
            />

            <YAxis
              tick={{ fontSize: 10 }}
            />

            <Tooltip />

            <Bar
              dataKey="complaints"
              fill="#0d6efd"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplaintChart;
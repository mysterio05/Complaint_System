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

const ComplaintChart = ({complaint}) => {
  

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h6 className="fw-bold mb-3">Category-wise Complaints</h6>

        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={complaint}>
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
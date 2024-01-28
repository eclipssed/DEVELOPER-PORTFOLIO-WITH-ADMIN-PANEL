"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const PlatformsCard = ({ visits }) => {
  const data = [
    { name: "Total", value: visits.total },
    { name: "Mobile", value: visits.mobile },
    { name: "Desktop", value: visits.desktop },
  ];
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={140}
        cy={140}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PlatformsCard;

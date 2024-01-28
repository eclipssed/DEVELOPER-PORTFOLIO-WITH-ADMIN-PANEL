"use client";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "sunday",
    value: "100",
  },
  {
    name: "monnday",
    value: "500",
  },
  {
    name: "tuesday",
    value: "200",
  },
  {
    name: "wednesday",
    value: "800",
  },
  {
    name: "thursday",
    value: "600",
  },
  {
    name: "friday",
    value: "300",
  },
  {
    name: "saturday",
    value: "700",
  },
];
const VisitsCard = ({ visits, visitsName }) => {
  return (
    <div className="flex gap-4 rounded-lg border-2 border-slate-950 p-4 ">
      <div>
        <h2 className="text-xl font-bold text-black">{visitsName}</h2>
        <div className="m-2 h-8 w-8 flex justify-center items-center mx-auto bg-slate-600 rounded-lg text-white">
          <p>{visits}</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={100} height={100} data={data}>
          <Tooltip
            contentStyle={{ background: "transparent", border: "none" }}
            labelStyle={{ display: "none" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#888"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitsCard;

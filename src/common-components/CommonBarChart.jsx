import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { dashboardData } from "../utils";
function CommonBarChart({details,data}) {
  return (
    <div>
      <BarChart width={details.width || 150} height={details.height || 100} data={data} barSize={10}>
        <XAxis dataKey={details.dataKeyX} scale="point" padding={{ left: 10, right: 10 }} />
        <Tooltip />
        <Bar dataKey={details.dataKey} fill={details.color} />
      </BarChart>
    </div>
  );
}

export default CommonBarChart;

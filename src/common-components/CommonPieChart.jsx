import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function CommonPieChart({ details, data }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <PieChart width={details.width || 150} height={details.height || 100}>
        <Pie
          dataKey={details.dataKeyValue}
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={40}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default CommonPieChart;

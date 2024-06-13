import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

function CommonLineChart({details,data}) {
  return (
    <div>
      <LineChart
        width={details.width || 200}
        height={details.height || 100}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey={details.dataKeyX} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={details.dataKeyOne}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
       {details.isMuliple &&  <Line  type="monotone" dataKey={details.dataKeyTwo} stroke="#82ca9d" />}
      </LineChart>
    </div>
  );
}

export default CommonLineChart;

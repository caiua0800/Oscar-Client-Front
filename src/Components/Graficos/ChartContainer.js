// LineChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: '04/2024', value: 30 },
  { name: '05/2024', value: 50 },
  { name: '06/2024', value: 38 }, // Valor destacado
  { name: '07/2024', value: 60 },
  { name: '08/2024', value: 45 },
  { name: '09/2024', value: 70 },
  { name: '10/2024', value: 55 },
];

const ChartContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ color: 'white', backgroundColor: '#333', padding: '5px', borderRadius: '5px' }}>
        {`${payload[0].value}%`}
      </div>
    );
  }
  return null;
};

const LineGraph = () => (
  <ChartContainer>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b00ff" />
            <stop offset="20%" stopColor="#0000ff" />
            <stop offset="40%" stopColor="#ffff00" />
            <stop offset="60%" stopColor="rgba(100, 255, 10, 1)" />
            <stop offset="80%" stopColor="#ffff00" />
            <stop offset="100%" stopColor="#8b00ff" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="url(#colorGradient)"
          strokeWidth={4}
          dot={{ r: 6 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default LineGraph;

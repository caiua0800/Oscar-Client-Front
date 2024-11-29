import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'; // Importar componentes necessários
import LineGraph from './ChartContainer';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);



const Dashboard = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales Productivity',
        data: [60, 70, 50, 80, 65, 75, 85],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div style={{ height: "100%", padding: '20px', color: '#fff' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
        <div>
          <button style={{ marginRight: '10px', padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Overview</button>
          <button style={{ marginRight: '10px', padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Monthly</button>
          <button style={{ marginRight: '10px', padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Finance</button>
        </div>
        <span style={{fontSize: "22px", color: "rgba(100, 255, 10, 1)"}}>AÇÕES DA EMPRESA</span>
        <div>
          <button style={{ marginRight: '10px', padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Details</button>
          <button style={{ marginRight: '10px', padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Monthly</button>
          <button style={{ marginRight: '10px', padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Yearly</button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          {/* <Line data={data} options={options} /> */}
          <LineGraph />
        </div>
        {/* <div style={{ paddingLeft: '0', textAlign: 'center' }}>
          <div style={{ fontSize: '42px', fontWeight: 'bold' }}>68.27%</div>
          <div>Lucro Atingido</div>
          <button style={{padding: "5px", cursor: "pointer", fontWeight: "800", borderRadius: "3px", backgroundColor: "rgba(56, 114, 255, 1)", color: "white", borderWidth: "0px" }}>Details</button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;

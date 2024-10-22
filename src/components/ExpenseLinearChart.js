import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
  datasets: [
    {
      label: 'Expense',
      data: [200, 400, 300, 700, 500, 400], // Data points
      fill: false, // No fill under the line
      borderColor: '#8884d8', // Line color
      tension: 0.1, // Smoothness of the line
      pointRadius: 5, // Radius of the dots on the line
      pointHoverRadius: 8, // Radius when hovering over dots
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const ExpenseLinearChart = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpenseLinearChart;

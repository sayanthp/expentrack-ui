import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Title, Tooltip, Legend, LinearScale } from 'chart.js';

// Register the required components (including the linear scale)
ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,  // This is the Linear Scale for numerical values
  Title,
  Tooltip,
  Legend
);

const ExpenseBarChart = ({ data }) => {
  // Data for the chart
  const chartData = {
    labels: data.map((item) => item.category), // Categories (e.g., Food, Rent, etc.)
    datasets: [
      {
        label: 'Expenses',
        data: data.map((item) => item.amount), // Corresponding amounts for each category
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color of the bars
        borderColor: 'rgba(75, 192, 192, 1)', // Border color of the bars
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Breakdown by Category',
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

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ExpenseBarChart;

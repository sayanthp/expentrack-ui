import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

// Example expense data
const expenseData = {
  labels: ['Food', 'Rent', 'Utilities', 'Transportation', 'Entertainment'],
  datasets: [
    {
      label: 'Expenses',
      data: [300, 800, 150, 100, 200], // Replace with actual data
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
      borderColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
      borderWidth: 1,
    },
  ],
};

const ExpensePieChart = () => {
  return (
    <div>
      <Pie data={expenseData} />
    </div>
  );
};

export default ExpensePieChart;

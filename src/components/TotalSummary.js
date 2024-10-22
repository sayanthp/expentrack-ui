import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default function TotalSummary() {
  const theme = useTheme();

  // Sample data for the dashboard
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-10', description: 'Groceries', amount: -50 },
    { id: 2, date: '2023-10-09', description: 'Salary', amount: 2000 },
    { id: 3, date: '2023-10-08', description: 'Electricity Bill', amount: -100 },
    { id: 4, date: '2023-10-07', description: 'Dining Out', amount: -30 },
    { id: 5, date: '2023-10-06', description: 'Freelance Payment', amount: 500 },
  ]);

  // Calculate total income, total expenses, and net balance
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
  const netBalance = totalIncome + totalExpenses;

  // Data for the Donut Chart
  const chartData = {
    labels: ['Income', 'Expenses', 'Net Balance'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [totalIncome, Math.abs(totalExpenses), netBalance],
        backgroundColor: [
          theme.palette.success.main, // Income
          theme.palette.error.main,   // Expenses
          theme.palette.info.main,    // Net Balance
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${context.label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
    cutout: '70%', // Creates the donut effect
  };

  return (

    <div style={{ width: '100%', height: '300px' }}>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register necessary chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const ExpensePieChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Expenses',
        data: [], // Default empty data
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
        borderColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
        borderWidth: 1,
      },
    ],
  });

  // Effect to update chart data whenever budget data changes
  useEffect(() => {
    if (data && data.length > 0) {
      const labels = data.map(item => item.category);
      const datasetData = data.map(item => item.amount);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Expenses',
            data: datasetData,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
            borderColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]); // Re-run this effect when 'data' prop changes

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default ExpensePieChart;

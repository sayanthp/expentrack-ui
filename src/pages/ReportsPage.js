import React, { useState } from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';
import DataExport from '../components/DataExport';
import TransactionsTable from '../components/TransactionsTable';
import TransactionFilter from '../components/TransactionFilter';

const ReportsPage = () => {
  // Sample Data (You could fetch this from an API in a real application)
  const [reportData, setReportData] = useState([
    { category: 'Food', amount: 150 },
    { category: 'Rent', amount: 800 },
    { category: 'Entertainment', amount: 120 },
    { category: 'Transportation', amount: 60 },
  ]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Box sx={{ padding: 3 }}>

        <Typography variant="h4" gutterBottom sx={{textAlign:'center',paddingBottom:'20px'}}>
          Financial Reports
        </Typography>

        {/* Filter for transactions */}
        <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <TransactionFilter />
        </Paper>

        {/* Recent Transactions */}
        <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <Typography variant="h6" color="text.primary" sx={{ paddingBottom: '10px' }}>
            Recent Transactions
          </Typography>
          {/* Transaction Table */}
          <TransactionsTable />
        </Paper>

        {/* Data Export */}
        <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" color="text.primary" sx={{ paddingBottom: '10px' }}>
            Export Data
          </Typography>
          {/* DataExport Component */}
          <DataExport data={reportData} fileName="Financial_Report" />
        </Paper>

      </Box>
    </Container>
  );
};

export default ReportsPage;

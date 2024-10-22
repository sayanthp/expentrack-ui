import React from 'react';
import DataTable from 'react-data-table-component';
import { Grid, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionsTable = () => {
  // Sample data for the dashboard
  const transactions = [
    { id: 1, date: '2023-10-10', transactionType: 'Expense', amount: -50, description: 'Groceries', category: 'Food' },
    { id: 2, date: '2023-10-09', transactionType: 'Income', amount: 2000, description: 'Salary', category: 'Salary' },
    { id: 3, date: '2023-10-08', transactionType: 'Expense', amount: -100, description: 'Electricity Bill', category: 'Utilities' },
    { id: 4, date: '2023-10-07', transactionType: 'Expense', amount: -30, description: 'Dining Out', category: 'Food' },
    { id: 5, date: '2023-10-06', transactionType: 'Income', amount: 500, description: 'Freelance Payment', category: 'Freelance' },
  ];

  // Columns configuration for DataTables
  const columns = [
    {
      name: 'Sl No',
      selector: (row, index) => index + 1,
      sortable: false, // Sl No doesn't need to be sortable
      width: '80px',
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Type',
      selector: row => row.transactionType,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: row => `$${row.amount.toFixed(2)}`,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <Grid container spacing={1}>
          <Grid item>
            <Tooltip title="Edit" arrow>
              <IconButton 
                color="primary" 
                onClick={() => handleEdit(row.id)}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Delete" arrow>
              <IconButton 
                sx={{ color: '#D11A2A' }} 
                onClick={() => handleDelete(row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      ),
      width: '120px',
    },
  ];

  // Dummy handlers for Edit and Delete
  const handleEdit = (id) => {
    alert(`Edit transaction with ID: ${id}`);
    // Add your logic for editing
  };

  const handleDelete = (id) => {
    alert(`Delete transaction with ID: ${id}`);
    // Add your logic for deleting
  };

  return (
    <DataTable
      columns={columns}
      data={transactions}
      pagination
      highlightOnHover
      responsive
    />
  );
};

export default TransactionsTable;

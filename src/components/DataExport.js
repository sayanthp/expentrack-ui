// src/components/DataExport.js
import React from 'react';
import { Button, Grid } from '@mui/material';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { SaveAlt, FileDownload } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Required for autoTable

const DataExport = ({ data, fileName }) => {
  // Export to CSV
  const exportToCSV = () => {
    const csvData = data.map((row) => ({
      Date: row.date,
      Description: row.description,
      Amount: row.amount.toFixed(2),
      Category: row.category,
    }));

    const csv = csvData.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    FileSaver.saveAs(blob, `${fileName}.csv`);
  };

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      data.map((row) => ({
        Date: row.date,
        Description: row.description,
        Amount: row.amount.toFixed(2),
        Category: row.category,
      }))
    );

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(`${fileName} Report`, 10, 10);
    doc.autoTable({
      head: [['Date', 'Description', 'Amount', 'Category']],
      body: data.map((row) => [row.date, row.description, row.amount.toFixed(2), row.category]),
    });
    doc.save(`${fileName}.pdf`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={exportToCSV}
          startIcon={<SaveAlt />}
        >
          CSV
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          onClick={exportToExcel}
          startIcon={<FileDownload />}
        >
          Excel
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="error"
          onClick={exportToPDF}
          startIcon={<FileDownload />}
        >
          PDF
        </Button>
      </Grid>
    </Grid>
  );
};

export default DataExport;

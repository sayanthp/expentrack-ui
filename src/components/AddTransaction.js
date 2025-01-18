import React, { useState } from 'react';
import { TextField, MenuItem, Button, Grid, Box, Typography, InputAdornment, Select, FormControl, InputLabel } from '@mui/material';
import { createTransaction } from '../service/TransactionService';
import { categoriesList } from '../constants/Categories';
import ToastSnackbar from './ToastSnackbar';
import { paymentModeList } from '../constants/PaymentModes';
import { validateTransactionData } from '../utils/AppUtility';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AddTransactionForm = () => {

    const { user } = useContext(AuthContext);

    const [toastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');

    const handleToastClose = () => {
        setToastOpen(false);
    };

    const [transactionData, setTransactionData] = useState({
        amount: '',
        date: '',
        category: '',
        type: 'debit',
        paymentMode: '',
        merchant: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransactionData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear error for this field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const validationErrors = validateTransactionData(transactionData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setToastMessage('Please fix the errors before submitting.');
            setToastType('error');
            setToastOpen(true);
            return;
        }
        
        const response = await createTransaction({user:user,transactionData:transactionData});
        
        if (response.success) {
            setToastMessage(response.message);
            setToastType('success');
        } else {
            setToastMessage(response.message);
            setToastType('error');
        }
        setToastOpen(true);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Add New Transaction
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* Amount */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Amount"
                            name="amount"
                            type="number"
                            value={transactionData.amount}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                            error={!!errors.amount}
                            helperText={errors.amount}
                            
                        />
                    </Grid>

                    {/* Date */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Date"
                            name="date"
                            type="date"
                            value={transactionData.date}
                            onChange={handleChange}
                            error={!!errors.date}
                            helperText={errors.date}
                            
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    {/* Category */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth error={!!errors.category}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={transactionData.category}
                                onChange={handleChange}
                                name="category"
                                
                            >
                                {categoriesList.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.category && <Typography color="error">{errors.category}</Typography>}
                        </FormControl>
                    </Grid>

                    {/* Transaction Type */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Transaction Type</InputLabel>
                            <Select
                                value={transactionData.type}
                                onChange={handleChange}
                                name="type"
                                
                            >
                                <MenuItem value="DEBIT">Debit</MenuItem>
                                <MenuItem value="CREDIT">Credit</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Payment Method */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth error={!!errors.paymentMode}>
                            <InputLabel>Payment Method</InputLabel>
                            <Select
                                value={transactionData.paymentMode}
                                onChange={handleChange}
                                name="paymentMode"
                                
                            >
                                {paymentModeList.map((mode) => (
                                    <MenuItem key={mode} value={mode}>
                                        {mode}
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.paymentMode && <Typography color="error">{errors.paymentMode}</Typography>}
                        </FormControl>
                    </Grid>

                    {/* Merchant */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Merchant"
                            name="merchant"
                            value={transactionData.merchant}
                            onChange={handleChange}
                            error={!!errors.merchant}
                            helperText={errors.merchant}
                            
                        />
                    </Grid>

                    {/* Description */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={transactionData.description}
                            onChange={handleChange}
                            error={!!errors.description}
                            helperText={errors.description}
                            
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Add Transaction
                            </Button>
                        </Box>
                    </Grid>

                    <ToastSnackbar
                        toastOpen={toastOpen}
                        toastMessage={toastMessage}
                        toastType={toastType}
                        handleToastClose={handleToastClose}
                    />
                </Grid>
            </form>
        </Box>
    );
};

export default AddTransactionForm;

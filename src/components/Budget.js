import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import ToastSnackbar from './ToastSnackbar';
import { createBudget, getBudget } from '../service/BudgetService';
import { AuthContext } from '../context/AuthContext';

const Budget = ({onSetBudget}) => {

  const categories = ['FOOD', 'RENT', 'ENTERTAINMENT', 'HEALTH', 'UTILITIES'];

  const { user } = useContext(AuthContext);

  const [budget, setBudget] = useState({
    FOOD: '',
    RENT: '',
    ENTERTAINMENT: '',
    HEALTH: '',
    UTILITIES: '',
  });

  const [errors, setErrors] = useState({});
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await getBudget({user:user});
        if (response.success) {
          onSetBudget([]);
          setToastMessage(response.message);
          setToastType('success');
          onSetBudget(response.body);
          const budget = formatBudget(response.body);
          setBudget(budget);
        } else {
          setToastMessage(response.message);
          setToastType('error');
        }
      } catch (error) {
        setToastMessage(error.message);
        setToastType('error');
      } finally {
        setToastOpen(true);
      }
    };
    fetchBudget();
  }, [user]);

  const formatBudget = (response) => {
      const budget = {};
      response.forEach(element => {
        if (element.category && typeof element.amount === 'number') {
          budget[element.category] = element.amount;
        }
      });
      return budget;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (parseFloat(value) < 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Value cannot be negative',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }

    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = Object.values(budget).every((amount) => amount !== '') &&
                    Object.values(errors).every((error) => error === '');

    if (!isValid) {
      setToastMessage('Please fill in all fields with valid values.');
      setToastType('error');
      setToastOpen(true);
      return;
    }

    const formattedBudget = Object.keys(budget).map((key) => ({
      category: key.toUpperCase(),
      amount: parseFloat(budget[key]),
      userId: user.userId,
    }));

    try {
      const response = await createBudget({ user, budget: formattedBudget });

      if (response.success) {
        setToastMessage('Budget successfully set!');
        setToastType('success');
        onSetBudget(response.body);
      } else {
        setToastMessage('Error setting budget. Please try again.');
        setToastType('error');
      }
    } catch (error) {
      setToastMessage('An error occurred. Please try again.');
      setToastType('error');
    } finally {
      setToastOpen(true);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Monthly Budget
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {categories.map((field) => (
              <Grid item xs={12} sm={6} md={6} key={field}>
                <TextField
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize first letter
                  variant="outlined"
                  margin="normal"
                  name={field}
                  value={budget[field]}
                  onChange={handleChange}
                  type="number"
                  error={!!errors[field]} // Show error if there is any for this field
                  helperText={errors[field]} // Display error message
                  InputLabelProps={{
                    shrink: budget[field] !== '', // Ensure the label is only shown when value is empty
                  }}
                />
              </Grid>
            ))}

            <Grid item xs={12} sx={{ textAlign: 'right', marginTop: 2 }}>
              <Button variant="contained" type="submit" sx={{ padding: '10px 20px' }}>
                Set Budget
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <ToastSnackbar
        toastOpen={toastOpen}
        toastMessage={toastMessage}
        toastType={toastType}
        handleToastClose={handleToastClose}
      />
    </Box>
  );
};

export default Budget;
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, TextField, Typography, Container, Snackbar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import Copyright from './Copyright';
import { validateSignUp } from '../utils/AppUtility';
import { signUpUser } from '../service/UserService';
import { useNavigate } from 'react-router-dom';
import ToastSnackbar from './ToastSnackbar';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

// Styled components
const Paper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const FormStyled = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const ClearButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));


export default function SignUp() {
  const navigate = useNavigate();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({}); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? '' : `${name} is required.`,
    }));
  };


  const handleSignUp = async (e) => {

    e.preventDefault();
    const validateResult = validateSignUp(userData);

    if (!validateResult.success) {
      setToastMessage(validateResult.message);
      setToastType('error');
      setToastOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      const { confirmPassword, ...dataToSubmit } = userData;
      const response = await signUpUser(dataToSubmit);
      if (response.success) {
        setToastMessage(response.message);
        setToastType('success');
        setToastOpen(true);
        setTimeout(() => {
          navigate('/signin');
        }, 3000);
      } else {
        setToastMessage(response.message);
        setToastType('error');
        setToastOpen(true);
      }
    } catch (error) {
      setToastMessage(error.message);
      setToastType('error');
      setToastOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  
  const clearFields = () => {
    setUserData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  
  const handleToastClose = () => {
    setToastOpen(false);
  };

  const { user, signIn } = useContext(AuthContext); // Get user state from AuthContext


  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <FormStyled noValidate>
          <Grid container spacing={2}>
            {/* Username */}
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="uname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                value={userData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </SubmitButton>

          {/* Clear Fields Button */}
          <ClearButton
            fullWidth
            variant="outlined"
            color="primary"
            onClick={clearFields}
          >
            Clear Fields
          </ClearButton>

          <Grid container justifyContent="center" style={{ padding: '10px' }}>
            <Grid item>
              <Link href="/signin" variant="body2" sx={{ textDecoration: 'none' }}>
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </FormStyled>

        <ToastSnackbar
        toastOpen={toastOpen}
        toastMessage={toastMessage}
        toastType={toastType}
        handleToastClose={handleToastClose}
      />

      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}


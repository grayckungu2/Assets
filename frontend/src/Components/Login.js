import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/login`, loginData);
      // Assuming the response format is { message: 'Login successful', access_token: 'token_value' }
      if (response.data.access_token) {
        // Store the token in localStorage or cookies for future API requests
        localStorage.setItem('access_token', response.data.access_token);
        setSnackbarMessage('Login successful');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Invalid response from server');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      setSnackbarMessage('Invalid username or password');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      maxWidth={400}
      margin="auto"
    >
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
        Login
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;

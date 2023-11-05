import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const Registration = () => {
  const [userData, setUserData] = useState({ username: '', password: '', email: '', role: '' });

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', userData);
      console.log(response.data.message);
      // Handle success, redirect or show a success message
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error, show an error message
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
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <TextField
        label="Role"
        variant="outlined"
        margin="normal"
        fullWidth
        value={userData.role}
        onChange={(e) => setUserData({ ...userData, role: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleRegistration} fullWidth>
        Register
      </Button>
    </Box>
  );
};

export default Registration;

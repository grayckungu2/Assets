import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const RemoveData = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dataId = 1; // Specify the data ID to be removed

  const handleRemoveData = async () => {
    const API_BASE_URL = 'http://127.0.0.1:5000'; // Base URL
    try {
      const response = await axios.delete(`${API_BASE_URL}/remove_data/${dataId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4')}`,
        },
      });
      setSnackbarMessage(response.data.message);
    } catch (error) {
      setSnackbarMessage('Failed to remove data.');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleRemoveData}>
        Remove Data
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="info">{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default RemoveData;

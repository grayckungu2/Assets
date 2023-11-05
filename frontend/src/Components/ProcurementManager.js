import React, { useState } from 'react';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const ProcurementManager = () => {
  const [requestId, setRequestId] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleApproveRequest = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:5000/approve_request/${requestId}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4 ')}`,
        },
      });
      setSnackbarMessage(response.data.message);
    } catch (error) {
      setSnackbarMessage('Failed to approve request.');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <TextField
        label="Request ID"
        variant="outlined"
        value={requestId}
        onChange={(e) => setRequestId(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleApproveRequest}>
        Approve Request
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="info">{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default ProcurementManager;

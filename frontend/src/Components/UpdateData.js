import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const UpdateData = () => {
  const [formData, setFormData] = useState({ asset_name: '', description: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleUpdateData = async () => {
    try {
      const dataId = Math.floor(Math.random() * 20) + 1; // Generates a random number between 1 and 20
      const response = await axios.put(`http://127.0.0.1:5000/update_data/${dataId}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4  ')}`,
        },
      });
      setSnackbarMessage(response.data.message);
    } catch (error) {
      setSnackbarMessage('Failed to update data.');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <TextField
        label="Asset Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.asset_name}
        onChange={(e) => setFormData({ ...formData, asset_name: e.target.value })}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleUpdateData}>
        Update Data
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="info">{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default UpdateData;

import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const AddData = () => {
  const [formData, setFormData] = useState({ asset_name: '', description: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const API_BASE_URL = 'http://127.0.0.1:5000/add_data';

  const handleAddData = async () => {
    try {
      const response = await axios.post(API_BASE_URL, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4')}`,
        },
      });
      setSnackbarMessage(response.data.message);
    } catch (error) {
      setSnackbarMessage('Failed to add data.');
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
      <Button variant="contained" color="primary" onClick={handleAddData}>
        Add Data
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="info">{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default AddData;

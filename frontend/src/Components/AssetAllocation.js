import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const AssetAllocation = () => {
  const [assetId, setAssetId] = useState('');
  const [username, setUsername] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAllocateAsset = async () => {
    try {
      const response = await axios.post(`http://your-api-domain.com/allocate_asset/${assetId}`, {
        username: username,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4 ')}`,
        },
      });

      setSnackbarMessage(response.data.message);
    } catch (error) {
      setSnackbarMessage('Failed to allocate asset.');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <TextField
        label="Asset ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={assetId}
        onChange={(e) => setAssetId(e.target.value)}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAllocateAsset}>
        Allocate Asset
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="info">{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default AssetAllocation;

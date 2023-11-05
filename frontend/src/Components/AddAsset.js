import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const AddAsset = () => {
  const [assetData, setAssetData] = useState({ name: '', category: '', status: '', image_url: '' });

  const handleAddAsset = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/add_asset', assetData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4 ')}`,
        },
      });
      // Show success message or redirect to another page
    } catch (error) {
      console.error('Error adding asset:', error);
      // Show error message
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        value={assetData.name}
        onChange={(e) => setAssetData({ ...assetData, name: e.target.value })}
      />
      <TextField
        label="Category"
        value={assetData.category}
        onChange={(e) => setAssetData({ ...assetData, category: e.target.value })}
      />
      <TextField
        label="Status"
        value={assetData.status}
        onChange={(e) => setAssetData({ ...assetData, status: e.target.value })}
      />
      <TextField
        label="Image URL"
        value={assetData.image_url}
        onChange={(e) => setAssetData({ ...assetData, image_url: e.target.value })}
      />
      <Button variant="contained" onClick={handleAddAsset}>
        Add Asset
      </Button>
    </div>
  );
};

export default AddAsset;

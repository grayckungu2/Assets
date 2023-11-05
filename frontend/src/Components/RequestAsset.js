import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const RequestAsset = () => {
  const [requestData, setRequestData] = useState({ asset_id: 0, reason: '', quantity: 0, urgency: '' });

  const handleRequestAsset = async () => {
    try {
      await axios.post(`http://127.0.0.1:5000/request_asset/${requestData.asset_id}`, requestData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE5MDcwMSwianRpIjoiN2QyNjdjOWUtMzk4OS00ZTg0LWJjYmQtMzBmOTNhMDkwZDUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoyNCwicm9sZSI6Ik5vcm1hbCBFbXBsb3llZSJ9LCJuYmYiOjE2OTkxOTA3MDEsImV4cCI6MTY5OTQ0OTkwMX0.hxvWknwdd2x1t0o2BxpxJjvTkDMJUC6a73TwcGIjK5Y ')}`,
        },
      });
      // Show success message or redirect to another page
    } catch (error) {
      console.error('Error requesting asset:', error);
      // Show error message
    }
  };

  return (
    <div>
      <TextField
        label="Asset ID"
        type="number"
        value={requestData.asset_id}
        onChange={(e) => setRequestData({ ...requestData, asset_id: e.target.value })}
      />
      <TextField
        label="Reason"
        value={requestData.reason}
        onChange={(e) => setRequestData({ ...requestData, reason: e.target.value })}
      />
      <TextField
        label="Quantity"
        type="number"
        value={requestData.quantity}
        onChange={(e) => setRequestData({ ...requestData, quantity: e.target.value })}
      />
      <TextField
        label="Urgency"
        value={requestData.urgency}
        onChange={(e) => setRequestData({ ...requestData, urgency: e.target.value })}
      />
      <Button variant="contained" onClick={handleRequestAsset}>
        Request Asset
      </Button>
    </div>
  );
};

export default RequestAsset;

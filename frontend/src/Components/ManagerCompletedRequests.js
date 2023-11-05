import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const ManagerCompletedRequests = () => {
  const [completedRequests, setCompletedRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/manager_completed_requests', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTE3MTA1MSwianRpIjoiMWI0NTg1N2MtNmIyMC00ZjViLWJlYjItYmY3OWUxNzJkODRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxOCwicm9sZSI6IlByb2N1cmVtZW50IE1hbmFnZXIifSwibmJmIjoxNjk5MTcxMDUxLCJleHAiOjE2OTk0MzAyNTF9.p5IwJMqRY-G-b0v4DHzBA-DDncOcl0wUFGHDT0pwLe4  ')}`,
          },
        });
        setCompletedRequests(response.data.completed_requests);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4">Completed Requests</Typography>
      {completedRequests.map((request) => (
        <Card key={request.id} style={{ margin: '10px' }}>
          <CardContent>
            <Typography variant="h6">Request ID: {request.id}</Typography>
            <Typography>Reason: {request.reason}</Typography>
            <Typography>Quantity: {request.quantity}</Typography>
            <Typography>Urgency: {request.urgency}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ManagerCompletedRequests;

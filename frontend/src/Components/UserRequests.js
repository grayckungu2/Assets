import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const UserRequests = () => {
  const [activeRequests, setActiveRequests] = useState([]);
  const [completedRequests, setCompletedRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/user_requests', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setActiveRequests(response.data.active_requests);
        setCompletedRequests(response.data.completed_requests);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4">Active Requests</Typography>
      {activeRequests.map((request) => (
        <Card key={request.id} style={{ margin: '10px' }}>
          <CardContent>
            <Typography>Reason: {request.reason}</Typography>
            <Typography>Quantity: {request.quantity}</Typography>
            <Typography>Urgency: {request.urgency}</Typography>
          </CardContent>
        </Card>
      ))}
      
      <Typography variant="h4" style={{ marginTop: '20px' }}>Completed Requests</Typography>
      {completedRequests.map((request) => (
        <Card key={request.id} style={{ margin: '10px' }}>
          <CardContent>
            <Typography>Reason: {request.reason}</Typography>
            <Typography>Quantity: {request.quantity}</Typography>
            <Typography>Urgency: {request.urgency}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserRequests;

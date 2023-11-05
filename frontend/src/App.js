import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';
import AddAsset from './Components/AddAsset';
import AllocateAsset from './Components/AssetAllocation';
import ManagerCompletedRequests from './Components/ManagerCompletedRequests';
import ProcurementManager from './Components/ProcurementManager';
import RequestAsset from './Components/RequestAsset';
import Registration from './Components/Registration';
import RemoveData from './Components/RemoveData';
import UpdateData from './Components/UpdateData';
import AddData from './Components/AddData';
import Login from './Components/Login';
import ManagerPendingRequests from './Components/ManagerPendingRequests';
import UserRequests from './Components/UserRequests';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Asset Management System
            </Typography>
            <Button color="inherit" component={Link} to="/add-asset" style={{ marginLeft: '20px' }}>
              Add Asset
            </Button>
            <Button color="inherit" component={Link} to="/allocate-asset" style={{ marginLeft: '20px' }}>
              Allocate Asset
            </Button>
            <Button color="inherit" component={Link} to="/completed-requests" style={{ marginLeft: '20px' }}>
              Completed Requests
            </Button>
            <Button color="inherit" component={Link} to="/approve-request" style={{ marginLeft: '20px' }}>
              Approve Request
            </Button>
            <Button color="inherit" component={Link} to="/request-asset" style={{ marginLeft: '20px' }}>
              Request Asset
            </Button>
            <Button color="inherit" component={Link} to="/register" style={{ marginLeft: '20px' }}>
              Register
            </Button>
            <Button color="inherit" component={Link} to="/remove-data" style={{ marginLeft: '20px' }}>
              Remove Data
            </Button>
            <Button color="inherit" component={Link} to="/update-data" style={{ marginLeft: '20px' }}>
              Update Data
            </Button>
            <Button color="inherit" component={Link} to="/add-data" style={{ marginLeft: '20px' }}>
              Add Data
            </Button>
            <Button color="inherit" component={Link} to="/login" style={{ marginLeft: '20px' }}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/pending-requests" style={{ marginLeft: '20px' }}>
              Pending Requests
            </Button>
            <Button color="inherit" component={Link} to="/user-requests" style={{ marginLeft: '20px' }}>
              User Requests
            </Button>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '20px' }}>
          <Route path="/add-asset" component={AddAsset} />
          <Route path="/allocate-asset" component={AllocateAsset} />
          <Route path="/completed-requests" component={ManagerCompletedRequests} />
          <Route path="/approve-request" component={ProcurementManager} />
          <Route path="/request-asset" component={RequestAsset} />
          <Route path="/register" component={Registration} />
          <Route path="/remove-data" component={RemoveData} />
          <Route path="/update-data" component={UpdateData} />
          <Route path="/add-data" component={AddData} />
          <Route path="/login" component={Login} />
          <Route path="/pending-requests" component={ManagerPendingRequests} />
          <Route path="/user-requests" component={UserRequests} />
          <Route path="/" exact>
            <div>
              <Typography variant="h4">Welcome to Asset Management System</Typography>
              <Typography variant="body1">
                Click on the links above to navigate to different sections of the application.
              </Typography>
            </div>
          </Route>
        </Container>
      </div>
    </Router>
  );
}

export default App;

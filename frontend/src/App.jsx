import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Add from './pages/Add';
import View from './pages/View';
import Update from './pages/Update';
import Login from './pages/Login';
import Register from './pages/Register';
import MyComplaints from './pages/MyComplaints';
import ComplaintDetails from './pages/ComplaintDetails';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminComplaintList from './pages/AdminComplaintList';
import StatusUpdate from './pages/StatusUpdate';
import Profile from './pages/Profile';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />

        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/update/:id" element={<Update />} />

        <Route path="/mycomplaints" element={<MyComplaints />} />
        <Route path="/complaintdetails/:id" element={<ComplaintDetails />} />

        <Route path="/admin" element={<AdminComplaintList />} />
        <Route path="/AdminComplaintList" element={<AdminComplaintList />} />
        <Route path="/admin/update/:id" element={<StatusUpdate />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
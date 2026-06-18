import React, { useState, useEffect } from 'react'
import './App.css'
import MyComplaints from "./pages/MyComplaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import Navbar from './components/Navbar'
import Add from './pages/Add';
import View from './pages/View';
import Update from './pages/Update';
import Dashboard from './pages/Dashboard'
import AdminComplaintList from './pages/AdminComplaintList'
import StatusUpdate from './pages/StatusUpdate'
import AdminDashboard from './pages/AdminDashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios';

function App() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/complaints')
      .then(res => setComplaints(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/admin' element={<AdminComplaintList/>}/>
      <Route path='/admin/update/:id' element={<StatusUpdate/>}/>
      <Route path='/mycomplaints' element={<MyComplaints/>}/>
      <Route path='/complaintdetails' element={<ComplaintDetails/>}/>
      <Route path='/mycomplaint' element={<View complaints={complaints} setComplaints={setComplaints} />}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/add' element={<Add complaints={complaints} setComplaints={setComplaints} />} />
      <Route path='/view' element={<View complaints={complaints} setComplaints={setComplaints} />} />
      <Route path='/update/:id' element={<Update complaints={complaints} setComplaints={setComplaints} />} />
      <Route path='/' element={<Navigate to="/login"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/AdminComplaintList' element={<AdminComplaintList/>}/>
    </Routes>
    </>
  )
}

export default App
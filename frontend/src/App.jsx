import React from 'react'
import { useState } from 'react'
import './App.css'
import MyComplaints from './pages/mycomplaints'
import ComplaintDetails from './pages/complaintdetails'
import Navbar from './components/Navbar'
import Add from './pages/Add';
import View from './pages/View';
import Update from './pages/Update';
import Dashboard from './pages/Dashboard'
import AdminComplaintList from './pages/AdminComplaintList'
import StatusUpdate from './pages/StatusUpdate'

import AdminDashboard from './pages/AdminDashboard'
import Dashboardbanner from "./components/Dashboardbanner";
import Activecomplaint from './pages/Activecomplaint'
import Raisecomplaint from './pages/Raisecomplaint'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [complaints, setComplaints] = useState([
    { title: 'Wi-Fi not working', category: 'Internet/Wi-Fi', location: 'Library', description: 'Signal dropping constantly' },
    { title: 'Projector broken', category: 'Classroom', location: 'Room 302', description: 'Screen flickering red' }
  ]);

  return (
    <>
     
    <Navbar />
    <Routes>
     
      <Route path='/admin' element={<AdminComplaintList/>}/>
      <Route path='/admin/update/:id' element={<StatusUpdate/>}/>
      <Route path='/mycomplaints' element={<MyComplaints/>}/>
      <Route path='/complaintdetails' element={<ComplaintDetails/>}/>
        <Route path='/mycomplaint' element={<View complaints={complaints} setComplaints={setComplaints} />}/>
       <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
       <Route path='/Activecomplaint' element={<Activecomplaint/>}/>
       <Route path='/raisecomplaint' element={<Raisecomplaint/>}/>
          <Route path='/add' element={<Add complaints={complaints} setComplaints={setComplaints} />} />
        <Route path='/view' element={<View complaints={complaints} setComplaints={setComplaints} />} />
        <Route path='/update/:id' element={<Update complaints={complaints} setComplaints={setComplaints} />} />
      <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      

    </Routes>
      
    
    </>
  )
}

export default App
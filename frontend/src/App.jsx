import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Add from './pages/Add';
import View from './pages/View';
import Update from './pages/Update';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Mycomplaints from './pages/Mycomplaints'
import AdminDashboard from './pages/AdminDashboard'
import Dashboardbanner from "./components/Dashboardbanner";
import Activecomplaint from './pages/Activecomplaint'
import Raisecomplaint from './pages/Raisecomplaint'

function App() {
  const [complaints, setComplaints] = useState([
    { title: 'Wi-Fi not working', category: 'Internet/Wi-Fi', location: 'Library', description: 'Signal dropping constantly' },
    { title: 'Projector broken', category: 'Classroom', location: 'Room 302', description: 'Screen flickering red' }
  ]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/Activecomplaint' element={<Activecomplaint/>}/>
        <Route path='/mycomplaint' element={<View complaints={complaints} setComplaints={setComplaints} />}/>
        <Route path='/raisecomplaint' element={<Add complaints={complaints} setComplaints={setComplaints} />}/>
        <Route path='/add' element={<Add complaints={complaints} setComplaints={setComplaints} />} />
        <Route path='/view' element={<View complaints={complaints} setComplaints={setComplaints} />} />
        <Route path='/update/:id' element={<Update complaints={complaints} setComplaints={setComplaints} />} />
      </Routes>
    </>
  )
}

export default App
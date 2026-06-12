import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import MyComplaints from './pages/mycomplaints'
import ComplaintDetails from './pages/complaintdetails'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import Activecomplaint from './pages/Activecomplaint'
import Raisecomplaint from './pages/Raisecomplaint'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/mycomplaints' element={<MyComplaints/>}/>
      <Route path='/complaintdetails' element={<ComplaintDetails/>}/>
       <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
       <Route path='/Activecomplaint' element={<Activecomplaint/>}/>
       <Route path='/raisecomplaint' element={<Raisecomplaint/>}/>
      

    </Routes>
      
    
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import MyComplaints from './pages/mycomplaints'
import ComplaintDetails from './pages/ComplaintDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/mycomplaints' element={<MyComplaints/>}/>
      <Route path='/complaintdetails' element={<ComplaintDetails/>}/>
    </Routes>
    </>
  )
}

export default App

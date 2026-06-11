import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import AdminComplaintList from './pages/AdminComplaintList'
import StatusUpdate from './pages/StatusUpdate'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/admin' element={<AdminComplaintList/>}/>
      <Route path='/admin/update/:id' element={<StatusUpdate/>}/>
    </Routes>
    </>
  )
}

export default App

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h2>Dashboard UI Layout</h2>
          </div>
        } />
      </Routes>
    </> 
  )
}

export default App

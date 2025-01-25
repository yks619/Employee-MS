import React from 'react'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/adminlogin" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
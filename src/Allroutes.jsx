import React from 'react'
import Navbars from './Navbars'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

function Allroutes() {
  return (
    <div>

        <Navbars></Navbars>
        <Routes>
                 <Route index path="/" element={<Home />} />
                 <Route path="/signup" element={<Signup />} />
                 <Route path="/login" element={<Login />} />

        </Routes>
    </div>
  )
}

export default Allroutes
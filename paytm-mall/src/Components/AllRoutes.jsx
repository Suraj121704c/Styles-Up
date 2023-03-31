import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import { Admin } from "../Pages/Admin"
import Home from '../Pages/Home'
 

const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>} />
        </Routes> 
  )
}

export default AllRoutes;
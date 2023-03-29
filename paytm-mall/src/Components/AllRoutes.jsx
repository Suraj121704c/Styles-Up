import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/admin" element={<AdminHome/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
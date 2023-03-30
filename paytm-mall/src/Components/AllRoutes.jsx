import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SingleUserPage } from '../Admin/Pages/SingleUserPage'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/admin" element={<AdminHome/>}></Route>
            <Route path='/fashion/:id' element={<SingleUserPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { Admin } from "../Pages/Admin"
import Home from '../Pages/Home'


import { SingleUserPage } from '../Admin/Pages/SingleUserPage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminHome />}></Route>
      <Route path='/fashion/:id' element={<SingleUserPage />} />
    </Routes>

  )
}

export default AllRoutes;
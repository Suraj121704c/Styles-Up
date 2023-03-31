 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from "../Pages/Admin"
import { SingleUserPage } from '../Admin/Pages/SingleUserPage'
import Products from "../Pages/Products/Electronics";
import Glasses from "../Pages/Products/Glasses";
import Jewellery from "../Pages/Products/Jewellery";
import Decoration from "../Pages/Products/Decoration";
import { AutoMobiles } from "../Pages/Products/autoMobiles";
import { HomePage } from '../Pages/HomePage/HomePage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path='/fashion/:id' element={<SingleUserPage />} />
        <Route path="/electronic" element={<Products />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/autoMobiles" element={<AutoMobiles />} />
      </Routes>
  );
};

export default AllRoutes;


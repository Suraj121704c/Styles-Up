import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../Pages/Admin";
 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from "../Pages/Admin"
import Home from "../Pages/HomePage/Home"
import Products from "../Pages/Products/Electronics";
import Glasses from "../Pages/Products/Glasses";
import Jewellery from "../Pages/Products/Jewellery";
import Decoration from "../Pages/Products/Decoration";
import { AutoMobiles } from "../Pages/Products/autoMobiles";
import Home from "../Pages/HomePage/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Cart from '../Admin/Pages/Cart'


const AllRoutes = () => {
  return ( 
      <Route path="/" element={<Home />} />
      <Route  path="/cart" element={<Cart/>}/>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path='/products/:id' element={<SingleUserPage />} />
        <Route path="/electronic" element={<Products />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/autoMobiles" element={<AutoMobiles />} />
        <Route path="/admin" element={<Admin/>}></Route>
         <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default AllRoutes;

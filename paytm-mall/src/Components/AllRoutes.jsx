
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../Pages/Admin";

import Products from "../Pages/Products/Electronics";
import Glasses from "../Pages/Products/Glasses";
import Jewellery from "../Pages/Products/Jewellery";
import Decoration from "../Pages/Products/Decoration";


import { HomePage } from '../Pages/HomePage';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { AutoMobiles } from "../Pages/Products/autoMobiles";
import Cart from '../Admin/Pages/Cart'
import { SingleUserPage } from "../Admin/Pages/SingleUserPage";



import PageNotFound from "../Pages/PageNotFound/PageNotFound";


import Payment from "../Pages/Payment";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />      
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />}></Route>
      <Route path='/products/:id' element={<SingleUserPage />} />
      <Route path="/electronic" element={<Products />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/glasses" element={<Glasses />} />
      <Route path="/decoration" element={<Decoration />} />
      <Route path="/autoMobiles" element={<AutoMobiles />} />
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;

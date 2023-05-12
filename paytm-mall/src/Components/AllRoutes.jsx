import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../Pages/Admin";
 
import Products from "../Pages/Products/Electronics";
import Glasses from "../Pages/Products/Glasses";
import Jewellery from "../Pages/Products/Jewellery";
import Decoration from "../Pages/Products/Decoration";

import { HomePage } from "../Pages/HomePage";

import { Signup } from "../Pages/Signup";
import { AutoMobiles } from "../Pages/Products/autoMobiles";
import Cart from "../Admin/Pages/Cart";
import { SingleUserPage } from "../Admin/Pages/SingleUserPage";

import PageNotFound from "../Pages/PageNotFound/PageNotFound";

import Payment from "../Pages/Payment";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import AdminLogin from "../Pages/AdminLogin";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/products/:id" element={<SingleUserPage />} />
      <Route path="/electronic" element={<Jewellery />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/glasses" element={<Jewellery />} />
      <Route path="/decoration" element={<Jewellery />} />
      <Route path="/autoMobiles" element={<Jewellery />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/paymentDetails" element={<PaymentDetails />}></Route>
    </Routes>
  );
};

export default AllRoutes;

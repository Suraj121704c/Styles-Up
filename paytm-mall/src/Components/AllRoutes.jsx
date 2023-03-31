import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../Admin/Pages/AdminHome/AdminHome";
import Products from "../Pages/Products/Electronics";
import Glasses from "../Pages/Products/Glasses";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/electronic/products" element={<Products />} />
        <Route path="/glasses/products" element={<Glasses />} />
        <Route path="/admin" element={<AdminHome />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
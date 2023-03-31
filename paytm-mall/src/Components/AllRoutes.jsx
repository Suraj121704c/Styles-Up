import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../Admin/Pages/AdminHome/AdminHome";
import Products from "../Pages/Products/Electronics";
import Glasses from "../Pages/Products/Glasses";
import Jewellery from "../Pages/Products/Jewellery";
import Decoration from "../Pages/Products/Decoration";
import { AutoMobiles } from "../Pages/Products/autoMobiles";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/electronic" element={<Products />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/autoMobiles" element={<AutoMobiles />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

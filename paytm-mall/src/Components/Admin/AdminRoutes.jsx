import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ManageAdmins from "./ManageAdmins";
import ManageProducts from "./ManageProducts";
import ManageOrders from "./ManageOrders";
import AddProducts from "./AddProducts";
import AddAdmins from "./AddAdmins"
export const AdminRoutes = () => {
  return (
    <>
      <Routes>
 {/*index ->  by default Products page will be shown on admin page  */}
        <Route   index   element={<ManageAdmins />} />
        <Route path="/manageorders" element={<ManageOrders />}></Route>
        <Route path="/manageproducts" element={<ManageProducts />}></Route>
        <Route path="/manageadmins" element={<ManageAdmins />}></Route>
        <Route path="/add-products" element={<AddProducts />}></Route>
        <Route path="/add-admins" element={<AddAdmins />}></Route>
      </Routes>
      <Outlet />
    </>
  );
};

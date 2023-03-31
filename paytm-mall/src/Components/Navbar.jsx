import React from 'react'
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div> 
      <NavLink  to="/admin">Admin</NavLink>
    </div>
  )
}

export default Navbar
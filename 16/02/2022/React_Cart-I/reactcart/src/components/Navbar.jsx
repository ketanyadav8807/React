import React from 'react'
import { Routes , Route, Link, Outlet } from 'react-router-dom';
import { About } from './About';
import { Products } from './Products';
import  { Contact } from "./Contact"

export const Navbar = () => {
  return (
    <div>
      <div style={{display: "flex" , justifyContent: "space-evenly" , marginTop: "0px" , backgroundColor: "lightgrey", padding: "20px"}}>
        <Link to="products"><h2>Products</h2></Link>
        <Link to="about"><h2>About</h2></Link>
        <Link to="contact"><h2>Contact</h2></Link>
        </div>
      <Routes>
          <Route path="Products" element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
      </Routes>
  </div>
  )
}

import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="container">
      <a href="#" class="brand">Logo</a>
      <div class="menu-toggle">&#9776;</div>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
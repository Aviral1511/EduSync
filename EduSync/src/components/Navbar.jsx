import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="container">
      <a href="/" class="brand">EduSync</a>
      <div class="menu-toggle">&#9776;</div>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <Link to={'/join-course'}>Join Course</Link>

      </ul>
    </div>
  </nav>
  )
}

export default Navbar
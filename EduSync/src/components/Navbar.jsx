import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="container">
      <a href="/" class="brand">EduSync</a>
      <div class="menu-toggle">&#9776;</div>
      <ul class="menu">
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
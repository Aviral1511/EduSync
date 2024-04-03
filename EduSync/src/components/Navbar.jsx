import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div><a class="navbar-brand" href="/">EduSync</a></div>
        <div >
          <a class="navbar-brand" href="/signup">Signup</a>
          <a class="navbar-brand" href="/login">Login</a>  
        </div>
      </div>
    </nav>
  )
}

export default Navbar
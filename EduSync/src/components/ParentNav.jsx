import React from 'react'

const ParentNav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <div >
          <a class="navbar-brand" href="/">My Courses</a>
          <a class="navbar-brand" href="/signup">Join New Course</a>
          <a class="navbar-brand" href="/login">Community Tab</a>  
        </div>
      </div>
    </nav>
  )
}

export default ParentNav
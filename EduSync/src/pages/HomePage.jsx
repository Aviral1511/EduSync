import React from 'react'
import ImgMediaCard from '../components/Card'
import Navbar from '../components/Navbar'


const HomePage = () => {
    
  return (
    <div> <Navbar />
    <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"6rem"}}>        
        <div>
            <ImgMediaCard img={"https://th.bing.com/th/id/OIP.upyE1zio2kz2cuU2Qf5MKgHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt={"teacher image"} title={"Teacher"} desc={"Continue as Teacher"} link={"/login"}/>
        </div>
        <div>
            <ImgMediaCard img={"https://th.bing.com/th?id=OIP.AK7VvijSXOU9rwk6ChWB_AHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} alt={"parent image"} title={"Parent"} desc={"Continue as Parent"} link={"/login"}/>
        </div> 
    </div>
    </div>
  )
}

export default HomePage
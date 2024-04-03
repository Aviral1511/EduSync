import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import CourseCreate from './pages/CourseCreate';
import DisplaySingleCourse from './pages/DisplaySingleCourse';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createCourse' element={<CourseCreate />} />
        <Route path='/displaySingleCourse' element={<DisplaySingleCourse />} />
        
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
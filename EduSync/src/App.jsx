import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Signup from './components/Signup'
import CourseCreate from './pages/CourseCreate';
import DisplaySingleCourse from './pages/DisplaySingleCourse';
import ParentPage from './pages/ParentPage'
import TeacherPage from './pages/TeacherPage'
import JoinCourse from './pages/JoinCourse';
const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/TeacherPage' element={<TeacherPage />}/>
        <Route path='/ParentPage' element={<ParentPage />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createCourse' element={<CourseCreate />} />
        <Route path='/displaySingleCourse/:id' element={<DisplaySingleCourse />} />
        <Route path='/join-course' element={<JoinCourse />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
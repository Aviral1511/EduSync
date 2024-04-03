import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Signup from './components/Signup'
import ParentPage from './pages/ParentPage'
import TeacherPage from './pages/TeacherPage'


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
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
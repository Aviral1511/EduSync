import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import HomePage from './pages/HomePage'
import Signup from './components/Signup'
import ParentPage from './pages/ParentPage'
import TeacherPage from './pages/TeacherPage'
import Forum from './components/Forum';
import CreateForum from './components/createForum';
import ReplyForum from './components/forumReply';


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
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/createForum" element={<CreateForum />} />
        <Route path="/forum/reply/:id" element={<ReplyForum />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
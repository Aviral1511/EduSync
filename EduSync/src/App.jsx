import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Signup from './components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import CineSphere from './pages/CineSphere'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { BrowserRouter , Route , Routes} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CineSphere/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

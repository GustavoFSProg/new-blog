import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Register from './Register'
import Profile from './Profile'

function Routeres() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres
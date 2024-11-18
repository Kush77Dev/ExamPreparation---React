import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Navbar = () => {
  return (
    <div>
      <Link to={"/login"} element={<Login/>}>Login</Link>
      <Link to={"/register"} element={<Register/>}>Register</Link>
    </div>
  )
}

export default Navbar

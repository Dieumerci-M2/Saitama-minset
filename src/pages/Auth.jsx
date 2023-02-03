import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Navbar from '../components/Navbar'

function Auth() {
  return (
    <div>
      <div className='flex justify-around '>
        <Login />
        </div>
        <Register />
    </div>
  )
}

export default Auth
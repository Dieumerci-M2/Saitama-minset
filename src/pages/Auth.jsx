import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

function Auth() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-around '>
        <Login />
      </div>
    </div>
  )
}

export default Auth
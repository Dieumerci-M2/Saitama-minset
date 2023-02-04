import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Pfooter from '../components/Pfooter'

function Auth() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-around '>
        <Login />
        </div>
       
        
        <div className='mt-20'>
          <Pfooter />
        </div>
    </div>
  )
}

export default Auth
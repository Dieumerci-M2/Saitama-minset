import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Auth() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-around '>
        <Login />
        </div>
        <div className='mt-20'>
          <Footer />
        </div>
    </div>
  )
}

export default Auth
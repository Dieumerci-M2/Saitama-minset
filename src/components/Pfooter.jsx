import React from 'react'
import saitama from "../assets/saitama.png"
import facebook from "../assets/Facebook.png"
import twiter from "../assets/Twitter.png"
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/logos_telegram.png"

const Pfooter = () => {
  return (
      <footer className='overflow-hidden bg-gray-200
       flex flex-col justify-between align-center text-center'
      >
          <div className='flex justify-center align-center text-center'>
              <div className='m-5'><img src={ saitama } alt="Logo" className="w-[80px] h-[30px]" /></div>
          </div>
          <div className='flex flex-col text-center'>
              <div className='flex justify-center align-center text-center gap-2'>
                  <img className='w-[30px] h-[30px] cursor-pointer' src={ facebook } alt="Logo" />
                  <img className='w-[30px] h-[30px] cursor-pointer' src={ telegram } alt="Logo" />
                  <img className='w-[30px] h-[30px] cursor-pointer' src={ twiter } alt="Logo" />
                 <img className='w-[30px] h-[30px] cursor-pointer' src={ linkedin } alt="Logo"/> 
              </div>
              <span
                  className='mt-10'
              >
                  All rights reserved . © 2023 SAITAMA-MINDSET. Powored by Colab-Group
              </span>
          </div>
      </footer>
  )
}

export default Pfooter
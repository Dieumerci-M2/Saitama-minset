import React from 'react'
import saitama from "../assets/saitama.png"
import facebook from "../assets/Facebook.png"
import twiter from "../assets/Twitter.png"
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/logos_telegram.png"

const Pfooter = () => {
  return (
      <footer>
          <div className='w-[150px] h-[50px]'><img src={ saitama } alt="Logo"/></div>
          <div>
              <span>
                  <img src={ facebook } alt="Logo" />
                  <img src={ telegram } alt="Logo" />
                  <img src={ twiter } alt="Logo" />
                 <img src={ linkedin } alt="Logo"/> 
              </span>
              <span>All rights reserved . © 2023 SAITAMA-MINDSET. Powored by Colab-Group</span>
          </div>
      </footer>
  )
}

export default Pfooter
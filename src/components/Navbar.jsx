import React from 'react'
import saitama from "../components/img/saitama.png"

function Navbar() {
  return (
    <div>

<header className='flex flex-row justify-between bg-white border-b-2 border-[gray]-600'>
              <div className='border w-[100px] h-[20px] m-2'><img src={saitama} alt="Logo"/></div>
              <div className='flex gap-10
               m-3 cursor-pointer mr-10 font-medium text-lg'
              >
                  <span id='inscription'>Inscription</span>
                  <span id='connexion'>Connexion</span>
              </div>
          </header>

    </div>
  )
}

export default Navbar
import React from 'react'
import Logo from '../assets/saitama.png'
import Facebook from '../assets/Facebook.png'
import Telegram from '../assets/logos_telegram.png'


const Footer = () => {
  const GotoTelegram = () => {
    
  }
  return (
    <footer className="bg-[#010626] text-[#FFFFFF] text-center">
      <section className="flex flex-col justify-center items-center text-center">
        <div className="w-[150px]  h-[50px] m-2 my-4 text-center">
          <img src={Logo} alt="logo" className="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 mt-4 ">
          <span className="mt-1 text-lg">suivez SAITAMA-MINDSET</span>
          <div className="flex gap-4">
            <span className="w-8 h-8 cursor-pointer text-white">
              <img src={Facebook} alt="facebook" className="text-white bg-[#FFFFFF] rounded " />
            </span>
            <span className="w-8 h-8 cursor-pointer text-white">
              <img src={Telegram} alt="telegram" className="text-white bg-[#FFFFFF] rounded" onClick={()=>GotoTelegram} />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center text-center my-5">
          <span className="text-lg font-semibold">SAITAMA COMPANY</span>
        </div>
        <div className="flex gap-4 mx-16">
          <span className="cursor-pointer">Privancy Policy</span>
          <span className="cursor-pointer">Accessibility</span>
          <span className="cursor-pointer">FAQ </span>
          <span className="cursor-pointer">Terms of use</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer
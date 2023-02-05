import React from 'react'
import Logo from '../assets/saitama.png'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Linkedin from '../assets/linkedin.png'
import Telegram from '../assets/logos_telegram.png'
import Phone from '../assets/phone.svg'

const Footer = () => {
  return (
    <footer className="bg-[#010626] text-[#FFFFFF]">
      <section className="flex flex-row justify-between mx-16">
        <div className="w-[150px]  h-[50px] m-2 my-8">
          <img src={Logo} alt="logo" className="" />
        </div>
        <div className="flex gap-10 my-8 ">
          <span className="mt-1 text-lg">suivez SAITAMA-MINDSET</span>
          <div className="flex gap-4">
            <span className="w-8 h-8 cursor-pointer text-white">
              <img src={Facebook} alt="facebook" className="text-white bg-[#FFFFFF] rounded " />
            </span>
            <span className="w-8 h-8 cursor-pointer text-white">
              <img src={Twitter} alt="twitter" className="text-white bg-[#FFFFFF] rounded" />
            </span>
            <span className="w-8 h-8 cursor-pointer text-white">
              <img src={Linkedin} alt="linkedin" className="text-white bg-[#FFFFFF] rounded" />
            </span>
            <span className="w-8 h-8 cursor-pointer text-white">
              <img src={Telegram} alt="telegram" className="text-white bg-[#FFFFFF] rounded" />
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between mx-16">
        <div className="flex flex-col gap-4 w-[400px] h-[155px] py-5">
          <span className="text-lg font-semibold">SAITAMA COMPANY</span>
          <span>
            51, Avenue Lokpa, Quartier Arzeke, Commune de Parokou, Ville de Parakou, Province du
            BORGOU, République du Benin
          </span>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold">Nos Bureaux sonts ouverts</span>
          <div className="mt-2">
            <span>Lundi-Vendredi </span>
            <span className="ml"> 8h30-16h00</span>
          </div>
          <div>
            <span>Samedi </span>
            <span>10h00-13h00</span>
          </div>
          <div>
            <span>Dimanche</span>
            <span>Fermez...</span>
          </div>
          <div className="flex flex-col my-4">
            <span className="text-lg font-semibold">Appeler nous aux</span>
            <div className="flex flex-row justify-end items-left gap-2 mt-2">
              <span>
                <img src={Phone} alt="phone" className="w-5 h-5" />
              </span>
              <span>+229970580581</span>
            </div>
            <div className="flex flex-row justify-end items-left gap-2">
              <span>
                <img src={Phone} alt="phone" className="w-5 h-5" />
              </span>
              <span>+2298227321182</span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-4 mx-16">
        <span className="cursor-pointer">Priivancy Policy</span>
        <span className="cursor-pointer">Accessibility</span>
        <span className="cursor-pointer">FAQ </span>
        <span className="cursor-pointer">Terms of use</span>
      </div>
    </footer>
  );
}

export default Footer
import React from 'react';
import Saitama from '../assets/saitama.png';
import Profil from '../assets/Profil.png'
import Search from '../assets/Vector.svg';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SousMenus from "./SousMenus"
const Menus = () => {
  const router = useNavigate();
  return (
    <section className="flex justify-around tablette:justify-between w-full ">
      <div
        className="w-[160px] tablette:w-28 my-2 mx-4
       xl:mr-10">
        <a href="https://t.me/Moneygrr" target="_blank">
          <img src={Saitama} alt="logo" className="xl:mr-8 cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-row my-2.5 -ml-1 rounded-l-xl h-8 lg:ml-6">
        <input
          className=" placeholder:text-slate-400 placeholder:text-[8px] tablette:placeholder:text-base
             bg-gray-100 w-28 tablette:w-80 laptop:w-96 border border-slate-300 py-2 tablette:pt-2 
             pl-2 tablette:pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-[8px] tablette:text-base 
             rounded-l-xl h-4 tablette:h-[30px]"
          type="text"
          placeholder="Rechercher un Livre..."
        />
        <span className="w-5 tablette:w-10 h-4 tablette:h-[30px] bg-red-700 cursor-pointer">
          <img src={ Search } alt="Search" className="m-auto my-[1px] tablette:my-[4px] w-9 h-3 tablette:h-[23px]
           text-[#FFFFFF]" />
        </span>
      </div>
      <div
        className="flex flex-row h-6 tablette:h-10 w-40 tablette:w-28 bg-gray-100 my-1 mt-2 ml-4 lg:mx-8 xl-8
       lg:ml-8 xl:ml-16 rounded">
        <img
          className="inline-block h-[20px] tablette:h-7 w-[20px] tablette:w-7 rounded-full ring-2 ring-white m-auto
           mt-[2px] tablette:mt-1.5 ml-1 xl:ml-4 lg:ml-1"
          src={ Profil}
          alt="Profil"
        />
        <div className='flex flex-col gap-1 tablette:gap-0'>
          <span
            onClick={() => {
              router('/register');
            }}
            className="text-[8px] tablette:text-[10px] mr-[inset] tablette:mr-2 mx-1 
            cursor-pointer -mt-[3px] tablette:mt-0 text-blue-500">
            Connexion
          </span>
          <span className="text-[8px] tablette:text-[10px] ml-[inset] tablette:ml-1 mx-1 
          cursor-pointer text-blue-500 -mt-3.5 tablette:-mt-[2px]">
            Compte
          </span>
        </div>
      </div>
      <div className="m-4 mt-3 tablette:hidden">
        <GiHamburgerMenu className="w-5 h-5" />
      </div>
      <div className="hidden tablette:block">
        <SousMenus />
      </div>
    </section>
  );
};

export default Menus;

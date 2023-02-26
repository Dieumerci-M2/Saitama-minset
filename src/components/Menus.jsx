import React from 'react';
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SousMenus from "./SousMenus"
const Menus = () => {
  const router = useNavigate();
  return (
    <section className="flex justify-around tablette:justify-between w-full ">
      <div
        className="w-[160px] tablette:w-24 my-2 mx-4
       xl:mr-10">
        <a href="https://t.me/Moneygrr" target="_blank">
          <img src={Saitama} alt="logo" className="xl:mr-8 cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-row my-2.5 tablette:my-3.5 -ml-1 rounded-l-xl h-10 lg:ml-8">
        <input
          className="placeholder:italic placeholder:text-slate-400 block
             bg-gray-100 w-28 tablette:w-48 border border-slate-300 py-2 pl-2 tablette:pl-9 pr-3 shadow-sm 
             focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
             sm:text-sm rounded-l-xl h-[25px]"
          type="text"
          placeholder="Rechercher un Livre..."
        />
        <span className="w-10 h-[25px] bg-red-700 cursor-pointer">
          <img src={Search} alt="Search" className="m-auto my-[1px] w-9 h-[23px] text-[#FFFFFF]" />
        </span>
      </div>
      <div
        className="flex flex-row h-6 tablette:h-8 w-56 tablette:w-28 bg-gray-100 my-1 mt-2 ml-4 lg:mx-8 xl-8
       lg:ml-8 xl:ml-16">
        <img
          className="inline-block h-[20px] tablette:h-7 w-[20px] tablette:w-7 rounded-full ring-2 ring-white m-auto
           mt-[2px] ml-1 xl:ml-4 lg:ml-1"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className='flex flex-col'>
          <span
            onClick={() => {
              router('/register');
            }}
            className="text-[8px] tablette:text-[10px] ml-[inset] tablette:ml-1 mx-1 cursor-pointer -mt-[3px] tablette:mt-0
             text-blue-500">
            Connexion
          </span>
          <span className="text-[8px] tablette:text-[10px] ml-[inset] tablette:ml-1 mx-1 cursor-pointer -mt-2.5 text-blue-500">
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

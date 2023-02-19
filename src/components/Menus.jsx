import React from 'react';
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import { useNavigate } from 'react-router-dom';
const Menus = () => {
  const router = useNavigate();
  return (
    <section className="flex justify-around w-full ">
      <div
        className="w-[150px]  h-[50px] my-3
       xl:mr-10">
        <a href="https://t.me/Moneygrr" target="_blank">
          <img src={Saitama} alt="logo" className="xl:mr-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="flex flex-row my-auto rounded-l-xl h-10 lg:ml-8 x-8 xl-8 
      ">
        <input
          className="placeholder:italic placeholder:text-slate-400 block
             bg-gray-100 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm 
             focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
             sm:text-sm rounded-l-xl"
          type="text"
          placeholder="Rechercher un Livre..."
          placeholder:italic
        />
        <span className="w-20 h-10 bg-red-700 cursor-pointer">
          <img src={Search} alt="Search" className="m-auto my-2 text-[#FFFFFF]" />
        </span>
      </div>
      <div className="flex flex-row h-12 w-48 bg-gray-100 my-auto mt-3 mx-8 lg:mx-8 xl-8
      ml-8 lg:ml-8 xl:ml-16"
      >
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-1 xl:ml-4 lg:ml-1"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <span
            onClick={() => {
              router('/register');
            }}
            className="mr-2 cursor-pointer">
            Connexion
          </span>
          <br />
          <span className="mr-2 cursor-pointer">Compte</span>
        </div>
      </div>
    </section>
  );
};

export default Menus;

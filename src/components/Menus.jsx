import React, { useState } from 'react';
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Menus = () => {
  const router = useNavigate();
  const [close, setClose] = useState(false);
  return (
    <section className=" flex  flex-col desktop:justify-around desktop:w-full ">
      <div className="flex justify-start my-5 mx-5">
        <div
          className="desktop:w-[150px] w-[150px] desktop:h-[50px]  desktop:my-3
                          desktop:xl:mr-10 self-start ">
          <a href="https://t.me/Moneygrr" target="_blank" className="">
            <img src={Saitama} alt="logo" className="desktop:xl:mr-8 cursor-pointer " />
          </a>
        </div>

        <div className="flex items-center">
          <div
            className="ml-12 flex flex-row desktop:h-12 desktop:w-48 bg-gray-100 desktop:my-auto desktop:mt-3 desktop:mx-8 lg:mx-8 xl-8
                              desktop:ml-8 lg:ml-8 xl:ml-16 justify-center ">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-1 xl:ml-4 lg:ml-1"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div
              onClick={() => {
                router('/register');
              }}>
              <span className="mr-2 cursor-pointer tablette:flex hidden text-green-700">
                Connexion
              </span>
              <br />
              <span className="mr-2 cursor-pointer  hidden laptop:flex desktop:flex">Compte</span>
            </div>
          </div>
          <AiOutlineMenu
            className="w-20 h-14 laptop:hidden desktop:hidden"
            onClick={() => setClose(true)}
          />
        </div>
      </div>
      {close && (
        <ul
          className={` ${close ? 'fixed top-0 left-0 ' : null} 
           flex-col h-screen w-screen gap-7 mt-7 items-center list-none flex  bg-slate-200  pt-8`}>
          <div className="flex flex-col gap-5 border border-red-100 shadow-sm py-10 px-10 shadow-slate-800 ">
            <li>
              <AiOutlineClose className="w-20 h-20" onClick={() => setClose(false)} />
            </li>
            <li className="text-xl hover:text-red-400 " onClick={() => router('/formation')}>
              Formation
            </li>
            <li className="text-xl hover:text-red-400 " onClick={() => router('/books')}>
              Nos Livres
            </li>
            <li className="text-xl hover:text-red-400 ">À propos</li>
            <li className="text-xl hover:text-red-400 " onClick={() => router('/contact')}>
              Contact
            </li>
          </div>
        </ul>
      )}
      <div
        className="flex flex-row my-auto rounded-l-xl h-10 lg:ml-8 x-8 xl-8 ml-1 
                    ">
        <input
          className="placeholder:italic placeholder:text-slate-400 md:block tablette:block laptop:block desktop:block
                           bg-gray-100 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm
                           focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                           sm:text-sm rounded-l-xl hidden"
          type="text"
          placeholder="Rechercher un Livre..."
          placeholder:italic
        />
        <span className="w-19 h-10 bg-red-700 cursor-pointer ">
          <img src={Search} alt="Search" className="m-auto my-2 text-[#FFFFFF]" />
        </span>
      </div>{' '}
      *
    </section>
  );
};

export default Menus;

import React from 'react';
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Not from '../assets/Vector(1).svg';
import Youtube from '../assets/Vector(2).svg';
const Menus = () => {
  return (
    <section className="flex justify-between">
      <div className="w-[150px]  h-[50px] my-3 mr-8">
        <img src={Saitama} alt="logo" className="mr-8 cursor-pointer" />
      </div>
      <div className="flex flex-row my-auto mx-8 rounded-l-xl h-10">
        <input
          className="placeholder:italic placeholder:text-slate-400 block
             bg-gray-100 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm 
             focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
             sm:text-sm rounded-l-xl"
          type="text"
          placeholder="Rechercher un Livre..."
          placeholder:italic
        />
        <select className="p-2 outline-none focus:border-sky-500 focus:ring-sky-500">
          <option>Catégories</option>
          <option>Selon le prix des livres</option>
          <option>Selon le prix des livres</option>
        </select>
        <span className="w-20 h-10 bg-red-700 cursor-pointer">
          <img src={Search} alt="Search" className="m-auto my-2 text-[#FFFFFF]" />
        </span>
      </div>
      <div className="flex flex-row h-12 w-[170px] bg-gray-100 my-auto mt-3 mx-8">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <span className="mr-2 cursor-pointer">Connexion</span>
          <br />
          <span className="mr-2 cursor-pointer">Compte</span>
        </div>
      </div>
      <div className="flex flex-row gap-8 mt-3 ml-6">
        <div className="flex flex-row gap-2 mt-1">
          <span>
            <img src={Not} alt="not" className="cursor-pointer" />
          </span>
          <span>Notifications</span>
        </div>
        <div className="mt-1">
          <img src={Youtube} alt="youtube" className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Menus;

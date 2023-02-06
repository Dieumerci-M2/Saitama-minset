import React from 'react'
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import SousMenus from '../components/SousMenus';

const Bookspage = () => {
  return (
    <article>
      <header>
        <section className="flex justify-between">
          <div className="w-[150px]  h-[50px] my-3 mr-2 mt-4 ml-2">
            <img src={Saitama} alt="logo" className="cursor-pointer" />
          </div>
          <div className="flex flex-row mt-6 mx-4 rounded-l-xl h-10">
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
          <div
            className="flex gap-6 font-semibold mr-1 mt-2
            text-lg bg-gray-300 text-white border-gray-900 border-2 px-4 py-4 ">
            <span className="cursor-pointer ml-3">Home</span>
            <span className="cursor-pointer ">Formations</span>
            <span className="cursor-pointer ">Nos livres</span>
            <span className="cursor-pointer ">Blogs</span>
            <span className="cursor-pointer ">Contact</span>
          </div>
        </section>
      </header>
      <main></main>
      <footer></footer>
    </article>
  );
}

export default Bookspage

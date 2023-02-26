import React from 'react'
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Footer from '../components/Footer';
import Formation from '../assets/Formation 1.jpg';
import Formation1 from '../assets/facebook-ads.jpeg';
import Formation2 from '../assets/ech.jpg';
import InfoLivre from '../components/InfoLivre';
import NewsLetter from '../components/NewsLetter';
import FormReact1 from "../assets/Formation-relatif-2.jpg"
import FormReact2 from "../assets/Formation-relatif-1.png"
import FormReact3 from '../assets/facebook-ads.jpeg';
import FormReact4 from '../assets/Formation 1.jpg';
import { useNavigate } from 'react-router-dom';

const Formationpage = () => {
  const router = useNavigate();
  return (
    <article>
      <header className="">
        <section className="flex flex-col desktop:justify-between ">
          <div className="w-[150px]  h-[50px] my-3 mr-2 mt-4 desktop:ml-2">
            <a href="" onClick={() => router('/')}>
              <img src={Saitama} alt="logo" className="cursor-pointer" />
            </a>
          </div>
          <div className="flex flex-row mt-6 desktop:mx-4 rounded-l-xl h-10 ml-2 mr-2">
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
            <span className="desktop:w-20 desktop:h-10 bg-red-700 cursor-pointer">
              <img src={Search} alt="Search" className="m-auto my-2 text-[#FFFFFF]" />
            </span>
          </div>
          <div
            className="flex justify-between font-semibold mr-2 mt-4 ml-2
        text-lg bg-gray-300 border-2 px-4 py-4 ">
            <span onClick={() => router('/home')} className="cursor-pointer hover:text-[#1E7DBD]">
              Home
            </span>
            <span
              onClick={() => router('/formation')}
              className="cursor-pointer hover:text-[#1E7DBD]">
              Formations
            </span>
            <span onClick={() => router('/books')} className="cursor-pointer hover:text-[#1E7DBD]">
              Nos livres
            </span>
            <span
              onClick={() => router('/contact')}
              className="cursor-pointer hover:text-[#1E7DBD]">
              Contact
            </span>
          </div>
        </section>
      </header>
      <main className="m-5">
        <h1 className="text-5xl flex before:justify-center">Mes Videos</h1>
        <article className="flex flex-col desktop:flex-row">
          <section className="desktop:w-[33%] desktop:h-[500px]">
            <div className="ml-1 bg-black ">
              <img
                src={Formation}
                alt="book"
                className="desktop:bg-cover desktop:h-[578px] desktop:w-[100%] cursor-pointer mt-2"
              />
            </div>
          </section>
          <section className=" desktop:w-[33%]">
            <InfoLivre />
          </section>
          <section className="desktop:w-[34%] flex desktop:flex-col desktop:gap-4 flex-col ">
            <div className="flex flex-row">
              <div className="w-[100%]">
                <img
                  src={Formation1}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex desktopflex-row">
              <div className="desktop:w-[100%]">
                <img
                  src={Formation2}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
          </section>
        </article>
        <h1 className="desktop:text-5xl desktop:my-10 text-3xl justify-center">Les plus téléchargées</h1>
        <article className="flex flex-col desktop:flex-row desktop:justify-between">
          <section className="grid desktop:grid-cols-2 desktop:gap-10 desktop:w-[68%] text-center">
            <div className="desktop:h-[300px] flex-col flex desktop:flex-col desktop:gap-2 desktop:w-[100%]">
              <img src={FormReact1} alt="harry" className=" bg-cover desktop:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Yomi Denzel, Dropshipping</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact2} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Infographie et design avec Canvas</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Publicité avac facebook</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact4} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">
                Faites-vous des millions grace à la pub instagram
              </span>
            </div>
          </section>
          <section className="mr-6">
            <NewsLetter />
          </section>
        </article>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </article>
  );
}

export default Formationpage

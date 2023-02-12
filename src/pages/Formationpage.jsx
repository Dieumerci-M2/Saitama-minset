import React from 'react'
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Footer from '../components/Footer';
import Formation from '../assets/Formation 1.svg';
import Formation1 from '../assets/Formation-relatif-1.svg';
import Formation2 from '../assets/Formation-relatif-2.svg';
import InfoLivre from '../components/InfoLivre';
import BoutonsRouge from "../components/ButtonsRouges"
import NewsLetter from '../components/NewsLetter';
import FormReact1 from "../assets/Formation-dispo-1.png"
import FormReact2 from "../assets/Formation-dispo-2.png"
import FormReact3 from '../assets/Formation-dispo-3.png';
import FormReact4 from '../assets/Formation-dispo-4.png';
import { useNavigate } from 'react-router-dom';

const Formationpage = () => {
  const router = useNavigate();
  return (
    <article>
      <header>
        <section className="flex justify-between">
          <div className="w-[150px]  h-[50px] my-3 mr-2 mt-4 ml-2">
            <a href="https://t.me/Moneygrr" target="_blank">
              <img src={Saitama} alt="logo" className="cursor-pointer" />
            </a>
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
            className="flex gap-10 font-semibold mr-1
        text-lg bg-gray-300 text-white border-gray-900 border-2 px-4 py-4 ">
            <span onClick={() => router('/home')} className="cursor-pointer">
              Home
            </span>
            <span onClick={() => router('/formation')} className="cursor-pointer ">
              Formations
            </span>
            <span onClick={() => router('/books')} className="cursor-pointer ">
              Nos livres
            </span>
            <span onClick={() => router('/contact')} className="cursor-pointer ">
              Contact
            </span>
          </div>
        </section>
      </header>
      <main className="my-10">
        <article className="flex flex-row">
          <section className="w-[33%] h-[500px]">
            <div className="ml-1 bg-black">
              <img
                src={Formation}
                alt="book"
                className="bg-cover h-[578px] w-[100%] cursor-pointer"
              />
            </div>
          </section>
          <section className="w-[33%]">
            <InfoLivre />
          </section>
          <section className="w-[34%] flex flex-col gap-4">
            <div className="flex flex-row">
              <div className="w-[100%]">
                <img
                  src={Formation1}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[100%]">
                <img
                  src={Formation2}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
          </section>
        </article>
        <BoutonsRouge />
        <article className="flex flex-row justify-between ">
          <section className="grid grid-cols-2 gap-10 w-[68%] text-center ml-10">
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact1} alt="harry" className=" bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">React js et native pour debutants</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact2} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">PHP et Laravel pour debutants</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Créer un seveur avec node</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact4} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">
                Decouvrer python avec son framework Flask
              </span>
            </div>
          </section>
          <section className="mr-10">
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
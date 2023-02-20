import React from 'react'
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Footer from '../components/Footer';
import Formation from '../assets/Formation 1.svg';
import Formation1 from '../assets/Formation-relatif-1.svg';
import Formation2 from '../assets/Formation-relatif-2.svg';
import InfoLivre from '../components/InfoLivre';
import NewsLetter from '../components/NewsLetter';
import FormReact1 from "../assets/Formation-dispo-1.png"
import FormReact2 from "../assets/Formation-dispo-2.png"
import FormReact3 from '../assets/Formation-dispo-3.png';
import FormReact4 from '../assets/Formation-dispo-4.png';
import { useNavigate } from 'react-router-dom';
import Menus from '../components/Menus';

const Formationpage = () => {
  const router = useNavigate();
  return (
    <article>
      <header className="">
        <section className="flex flex-col desktop:justify-between ">

          < Menus />
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

import React from 'react'
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Harry1 from '../assets/BooksReal.jpg';
import Harry2 from '../assets/Harry-Potter-de-J.K.-Rowling.jpg';
import Harry3 from '../assets/HenryPorter1.jpg';
import InfoLivre from '../components/InfoLivre';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import { useNavigate } from 'react-router-dom';

const Bookspage = () => {
  const router = useNavigate();
  return (
    <article>
      <header className="mx-10">
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
            className="flex gap-6 font-semibold mr-1 h-14 mt-4
        text-lg bg-gray-300 border-2 px-4 py-2  ">
            <span
              onClick={() => router('/home')}
              className="cursor-pointer hover:text-[#1E7DBD]">
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
      <main className="desktop:">
        <h1 className="desktop:text-5xl desktop:my-10 text-3xl flex justify-center">Mes Collections</h1>
        <article className="flex flex-col desktop:flex-row">
          <section className="desktop:w-[33%] desktop:h-[500px] mx-2">
            <div className="desktop:ml-1">
              <img src={Harry2} alt="book" className="bg-cover h-[578px] w-[100%] cursor-pointer" />
            </div>
          </section>
          <section className="w-[33%]">
            <InfoLivre />
          </section>
          <section className="w-[34%] flex flex-col gap-4">
            <div className="w-[100%]">
              <img
                src={Harry1}
                alt="harry"
                className="bg-cover h-[280px] w-[100%] cursor-pointer"
              />
            </div>
            <div className="w-[100%]">
              <img
                src={Harry3}
                alt="harry"
                className="bg-cover h-[280px] w-[100%] cursor-pointer"
              />
            </div>
          </section>
        </article>
        <h1 className="text-5xl my-10">Les plus achetés</h1>
        <article className="flex flex-row justify-between ">
          <section className="grid grid-cols-2 gap-10 w-[68%] text-center ml-1">
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={Harry2} alt="harry" className=" bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Harry Porter and the cursed child</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={Harry3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Harry Porter and the cursed child</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={Harry3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Harry Porter and the cursed child</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={Harry2} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Harry Porter and the cursed child</span>
            </div>
          </section>
          <section className="mr-6">
            <NewsLetter />
          </section>
        </article>
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>
    </article>
  );
}

export default Bookspage

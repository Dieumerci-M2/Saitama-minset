import React from 'react'
import Menus from "../components/Menus"
import Footer from "../components/Footer"
import Reduction from '../assets/reduction.svg'
import Livraison from '../components/Livraison'
import Categories from '../components/CategoriesSearch'
import Affiche from '../assets/Affiche.jpg'
import SousMenus from '../components/SousMenus'
import ButtonsRouge from '../components/ButtonsRouges'
import InfoLivre from '../components/InfoLivre'
import Harry1 from "../assets/BooksReal.jpg"
import Harry2 from "../assets/Harry-Potter-de-J.K.-Rowling.jpg"
import Harry3 from "../assets/HenryPorter1.jpg"


const Homepage = () => {
  return (
    <article className="">
      <header className="flex justify-center flex-col items-center">
        <div className="flex justify-between w-[1200px] h-[30px] bg-gray-300">
          <div className="flex flex-row ml-2 gap-4">
            <span>
              <img src={Reduction} alt="reduction" />
            </span>
            <span className="text-white">Nos réductions vont jusqu’à 70%</span>
          </div>
          <div className="flex flex-row gap-2">
            <select name="devise" id="devise" className="bg-gray-300 text-white">
              <option value="1">USD</option>
              <option value="2">Fc</option>
            </select>
            <select name="language" id="language" className="bg-gray-300 text-white">
              <option value="1">French</option>
              <option value="2">English</option>
            </select>
          </div>
        </div>
        <Menus />
      </header>
      <main className="my-[30px]">
        <article className="flex flex-row gap-4">
          <section className="ml-2">
            <Categories />
          </section>
          <section className="flex flex-row">
            <div
              className="flex flex-col justify-center items-center text-center p-8 pt-8 gap-6 text-lg
             bg-slate-200 w-[50%]">
              <span className="text-red-900 mt-3">J.K ROWLING</span>
              <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
              <span className="text-red-900"> $13.22 </span>
              <button className="py-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
            </div>
            <div className="w-[50%] bg-cover ">
              <img src={Affiche} alt="affiche" className="bg-cover h-[50%]" />
            </div>
          </section>
          <section>
            <SousMenus />
            <section className="flex flex-row mr-1 gap-4 mt-4">
              <div
                className="flex flex-col text-center p-8 pt-2 justify-center
               items-center gap-4 text-lg bg-slate-200 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
              <div
                className="flex flex-col text-center justify-center items-center
               p-8 pt-2 gap-4 text-lg bg-slate-200 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
            </section>
          </section>
        </article>
        <Livraison />
        <article className="flex flex-row">
          <section className="w-[33%] h-[500px]">
            <div className="ml-1">
              <img src={Harry2} alt="book" className="bg-cover h-[578px] w-[100%]" />
            </div>
          </section>
          <section className="w-[33%]">
            <InfoLivre />
          </section>
          <section className="w-[34%] flex flex-col gap-4">
            <div className="flex flex-row">
              <div className="flex flex-col gap-4 bg-slate-200 p-6 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
              <div className='w-[50%]'>
                <img src={Harry1} alt="harry" className="bg-cover h-[274px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col gap-4 bg-slate-200 p-6 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
              <div className='w-[50%]'>
                <img src={Harry3} alt="harry" className="bg-cover h-[274px] w-[100%]" />
              </div>
            </div>
          </section>
        </article>
        <ButtonsRouge />
        <article></article>
        <article>
          <div></div>
          <div></div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default Homepage
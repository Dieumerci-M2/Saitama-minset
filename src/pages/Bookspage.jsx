import React from 'react'
import Harry1 from '../assets/BooksReal.jpg';
import Harry2 from '../assets/auto.jpg';
import Harry3 from '../assets/cashflow.jpg';
import Entre from '../assets/entre.jpg';
import InfoLivre from '../components/InfoLivre';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import { useNavigate } from 'react-router-dom';
import Menus from '../components/Menus';
import Reduction from '../assets/reduction.svg';


const Bookspage = () => {
  const router = useNavigate();
  return (
    <article className="text-sm">
      <header
        className="flex justify-center flex-col items-center                        
            tablette:flex tablette:justifiy-center tablette:flex-col tablette:items-center
           tablette:justify-center
            ">
        <div
          className="flex justify-between w-full h-[30px] tablette:h-[40px] bg-slate-200
                tablette:flex tablette:justifiy-between tablette:w-full
                desktop:flex tablette:justify-between">
          <div className="flex flex-row ml-2 gap-2 tablette:flex tablette:flex-row">
            <span className="m-auto">
              <img src={Reduction} alt="reduction" className="text-black cursor-pointer" />
            </span>
            <a href="https://git.io/typing-svg" className="my-auto mt-1">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=timenewreman&weight=400&size=23&duration=2500&pause=1000&color=7C3AED&background=8672FF00&width=460&lines=Nos+réductions+vont+jusqu’à+70%"
                alt="Typing SVG"
                className="flex justify-center"
              />
            </a>
          </div>
          <div className="flex tablette:flex-row tablette:gap-2">
            <select
              name="devise"
              id="devise"
              className="bg-gray-200 text-sm tablette:text-base text-black outline-none 
                cursor-pointer">
              <option value="1">USD</option>
              <option value="2">FC</option>
            </select>
            <select
              name="language"
              id="language"
              className="bg-gray-200 text-sm tablette:text:base text-black outline-none 
                cursor-pointer">
              <option value="1">French</option>
              <option value="2">English</option>
            </select>
          </div>
        </div>
        <Menus />
      </header>
      <main className="mb-5  mx-5">
        <h1
          className="text-2xl tablette:text-5xl my-4 flex justify-center tablette:justify-start 
          laptop:justify-start">
          Nos Collections
        </h1>
        <article className="flex flex-col tablette:flex-row">
          <section className="w-[inset] tablette:w-[33%] tablette:h-[520px]">
            <div className="">
              <img
                src={Harry2}
                alt="book"
                className="bg-cover w-[inset] tablette:w-[100%] h-[inset] tablette:h-[520px] cursor-pointer"
              />
            </div>
          </section>
          <section
            className="flex flex-col gap-1 tablette:gap-4 my-6 tablette:my-0 py-0 tablette:py-4 px-4 tablette:px-8 mr-3
     text-center shadow-xl">
            <div classname="flex flex-col">
              <div className="text-red-900 text-lg">CHRISTOPHER SOYTOROV</div>
              <div className="font-semibold text-2xl mt-0 tablette:mt-6">
                GUIDE DE L'APPRENTIS MILLIONNAIRE
              </div>
            </div>
            <div className="flex flex-col desktop:justify-center">
              <span className="text-red-900 text-2xl">$10</span>
              <span className="line-through text-gray-500 desktop:ml-8 text-2xl">$15.32</span>
            </div>
            <div className="w-[100%] my-2">
              <div className="flex justify-between mb-1">
                <span>Solde: 10</span>
                <span>Disponible: 60</span>
              </div>
              <div className="h-[10px] bg-gray-300 rounded-md">
                <div className="w-[16%] h-[8px] bg-blue-400 rounded-md"></div>
              </div>
            </div>
            <span>L'offre se termine dans:</span>
            <div className="flex flex-row justify-around my-3">
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="p-4 bg-gray-400 rounded-md text-2xl font-semibold">00</span>
                <span className="text-[8px]">Hours</span>
              </div>
              <span className="mt-2 rounded-md text-4xl font-semibold">:</span>
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="p-4 bg-gray-400 rounded-md text-2xl font-semibold">00</span>
                <span className="text-[8px]">Minutes</span>
              </div>
              <span className="mt-2 rounded-md text-4xl font-semibold">:</span>
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="p-4 bg-gray-400 rounded-md text-2xl font-semibold">00</span>
                <span className="text-[8px]">Secondes</span>
              </div>
            </div>
          </section>
          <section className="w-[100%] tablette:w-[34%] flex tablette:flex-col gap-4 ">
            <div className="flex w-[50%] tablette:w-[100%]">
              <div className="w-[100%]" onClick={() => setShowpayement(true)}>
                <img
                  src={Harry1}
                  alt="harry"
                  className="w-[inset] bg-cover h-[inset] tablette:h-[252px] tablette:w-[100%] 
                    cursor-pointer"
                />
              </div>
            </div>
            <div className="flex w-[50%] tablette:w-[100%]">
              <div className="w-[100%]" onClick={() => setShowpayement(true)}>
                <img
                  src={Harry3}
                  alt="harry"
                  className="w-[inset] bg-cover h-[inset] tablette:h-[252px] tablette:w-[100%] 
                    cursor-pointer object-cover"
                />
              </div>
            </div>
          </section>
        </article>
        <h1 className="tablette:text-5xl tablette:my-10 text-3xl justify-center">
          Les plus achétés
        </h1>
        <article className="flex tablette:flex-row tablette:justify-between flex-col ">
          <section className="tablette:grid tablette:grid-cols-2 tablette:gap-10 tablette:w-[68%] text-center my-7 mx-5">
            <div className="tablette:h-[300px] flex flex-col tablette:flex-col gap-2 tablette:w-[100%]">
              <img
                src={Harry2}
                alt="harry"
                className=" bg-cover tablette:h-[100%] cursor-pointer"
              />
              <span className="text-lg font-semibold">L'AUTOROUTE DU MILLIONNAIRE</span>
            </div>
            <div className="tablette:h-[300px] flex flex-col  tablette:flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={Harry3} alt="harry" className="bg-cover tablette:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">LE QUADRANT DU CASHFLOW</span>
            </div>
            <div className="tablette:h-[300px] flex flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={Harry1} alt="harry" className="bg-cover tablette:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold"></span>
            </div>
            <div className="tablette:h-[300px] flex-col flex tablette:flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={Entre} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">L'ENTREPRENEUR DU 21E SIECLE</span>
            </div>
          </section>
          <section className="mt-10">
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

export default Bookspage

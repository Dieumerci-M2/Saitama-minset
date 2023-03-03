import React from 'react'
import Footer from '../components/Footer';
import Formation from '../assets/Formation 1.jpg';
import Formation1 from '../assets/facebook-ads.jpeg';
import Formation2 from '../assets/ech.jpg';
import NewsLetter from '../components/NewsLetter';
import FormReact1 from "../assets/Formation-relatif-2.jpg"
import FormReact2 from "../assets/Formation-relatif-1.png"
import FormReact3 from '../assets/facebook-ads.jpeg';
import FormReact4 from '../assets/Formation 1.jpg';
import { useNavigate } from 'react-router-dom';
import Menus from '../components/Menus';
import Reduction from '../assets/reduction.svg';

const Formationpage = () => {
  const router = useNavigate();
  return (
    <article>
      <header className="">
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
      <main className="m-5">
        <h1
          className="text-2xl tablette:text-5xl my-4 flex justify-center tablette:justify-start 
          laptop:justify-start">
          Nos Videos
        </h1>
        <article className="flex flex-col tablette:flex-row">
          <section className="tablette:w-[33%] tablette:h-[500px]">
            <div className="ml-1 bg-black">
              <img
                src={Formation}
                alt="book"
                className="bg-cover h-[inset] tablette:h-[520px] cursor-pointer"
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
                  src={Formation1}
                  alt="harry"
                  className="w-[inset] bg-cover h-[inset] tablette:h-[252px] tablette:w-[100%] 
                    cursor-pointer"
                />
              </div>
            </div>
            <div className="flex w-[50%] tablette:w-[100%]">
              <div className="w-[100%]" onClick={() => setShowpayement(true)}>
                <img
                  src={Formation2}
                  alt="harry"
                  className="w-[inset] bg-cover h-[inset] tablette:h-[252px] tablette:w-[100%] 
                    cursor-pointer"
                />
              </div>
            </div>
          </section>
        </article>
        <h1 className="tablette:text-5xl tablette:my-10 text-3xl justify-center">
          Les plus téléchargées
        </h1>
        <article className="flex flex-col tablette:flex-row tablette:justify-between">
          <section className="grid tablette:grid-cols-2 tablette:gap-10 tablette:w-[68%] text-center">
            <div className="tablette:h-[300px] flex-col flex tablette:flex-col tablette:gap-2 tablette:w-[100%]">
              <img
                src={FormReact1}
                alt="harry"
                className=" bg-cover tablette:h-[100%] cursor-pointer object-cover"
              />
              <span className="text-lg font-semibold">Yomi Denzel, Dropshipping</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img
                src={FormReact2}
                alt="harry"
                className="bg-cover h-[100%] cursor-pointer object-cover"
              />
              <span className="text-lg font-semibold">Infographie et design avec Canvas</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Publicité avac facebook</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img
                src={FormReact4}
                alt="harry"
                className="bg-cover h-[100%] w-[100%] cursor-pointe object-cover"
              />
              <span className="text-lg font-semibold">
                Faites-vous des millions grace à la pub...
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

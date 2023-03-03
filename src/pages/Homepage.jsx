import React, { useState } from 'react';
import Menus from '../components/Menus';
import Footer from '../components/Footer';
import Reduction from '../assets/reduction.svg';
import Livraison from '../components/Livraison';
import Categories from '../components/CategoriesSearch';
import Affiche from '../assets/Affiche.jpg';
import InfoLivre from '../components/InfoLivre';
import Harry1 from '../assets/BooksReal.jpg';
import Harry2 from '../assets/millionnaire.png';
import Harry3 from '../assets/HenryPorter1.jpg';
import Formation from '../assets/Formation 1.jpg';
import Formation1 from '../assets/Formation-relatif-1.png';
import Formation2 from '../assets/Formation-relatif-2.jpg';
import Bed from '../assets/Bed.jpg';
import Payement from '../components/PaiyementModal';

const Homepage = () => {
  const [showpayment, setShowpayement] = useState(false);
  const HandlerOnclose = () => setShowpayement(false);
  return (
    <>
      <article className="text-sm laptop:text-sm ">
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
            Catalogue
          </h1>
          <Payement onClose={HandlerOnclose} Visible={showpayment} />
          <article
            className="flex flex-col gap-4 laptop:m-0 tablette:m-2 justify-center
                    tablette:justify-center laptop:justify-center tablette:gap-3 tablette:flex-row">
            <section className="w-[inset] tablette:w-[20%] mr-0 laptop:mr-0 xl:mr-2">
              <Categories />
            </section>
            <section className="flex w-[inset] tablette:w-[40%] mr-0 laptop:mr-0 xl:mr-1">
              <div
                className="flex flex-col justify-center items-center text-center p-8 pt-8 gap-6 text-laptop
                 bg-slate-200 w-[50%] laptop:text-base xl:text-laptop">
                <span className="text-red-900 mt-3">R. KIYOSAKI</span>
                <span className="font-semibold" max={6}>GUIDE POUR INVESTIR</span>
                <span className="text-red-900">$6</span>
                <button
                  onClick={() => setShowpayement(true)}
                  className="py-1 px-4 text-white bg-[#1E7DBD] ">
                  Lire plus
                </button>
              </div>
              <div className="w-[50%] bg-cover ">
                <img
                  onClick={() => setShowpayement(true)}
                  src={Affiche}
                  alt="affiche"
                  className="bg-cover h-[100%] w-[100%] tablette:h-96 cursor-pointer"
                />
              </div>
            </section>
            <section className="w-[inset] tablette:w-[40%]">
              <section className="flex gap-3">
                <div
                  className="flex flex-col text-center p-8 pt-2 justify-center items-center 
                  gap-4 text-laptop bg-slate-200 w-[50%] tablette:h-96 laptop:text-base xl:text-laptop
                  ">
                  <span className="text-red-900 mt-3">MJ DE MARCO</span>
                  <span className="font-semibold">L'AUTOROUTE DU MILLIONNAIRE</span>
                  <span className="text-red-900">$6</span>
                  <button
                    onClick={() => setShowpayement(true)}
                    className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">
                    Lire plus
                  </button>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center p-8 pt-2
                   gap-4 bg-slate-200 w-[50%] tablette:text-base xl:text-laptop">
                  <span className="text-red-900 mt-3">R. KIYOSAKI</span>
                  <span className="font-semibold">LE QUADRANT DU CASHFLOW</span>
                  <span className="text-red-900">$6</span>
                  <button
                    onClick={() => setShowpayement(true)}
                    className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">
                    Lire plus
                  </button>
                </div>
              </section>
            </section>
          </article>
          <Livraison />
          <h1
            className="text-2xl tablette:text-5xl my-5 -mt-[inset] tablette:-mt-12
             flex justify-center tablette:justify-start laptop:justify-start">
            Nos Livres
          </h1>
          <article className="flex flex-col tablette:flex-row justify-center">
            <section className="w-[inset] tablette:w-[33%]">
              <div className="ml-1" onClick={() => setShowpayement(true)}>
                <img
                  src={Harry2}
                  alt="book"
                  className="bg-cover w-[100%] h-[inset] tablette:h-[518px] cursor-pointer"
                />
              </div>
            </section>
            <section className="w-[inset] tablette:w-[34%]">
              <InfoLivre />
            </section>
            <section className="flex flex-col tablette:flex tablette:gap-4 w-[inset] tablette:w-[33%]">
              <div className="flex flex-col  tablette:flex-row">
                <div
                  className="w-[inset] tablette:w-[50%] flex flex-col justify-start items-center text-center gap-4 
                bg-slate-200 p-6 ">
                  <span className="text-red-900">NAPOLEON III</span>
                  <span className="font-semibold">REFLECHISSEZ ET DEVENEZ RICHE</span>
                  <span className="text-red-900">$6</span>
                  <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
                </div>
                <div className="w-[inset] tablette:w-[50%]" onClick={() => setShowpayement(true)}>
                  <img
                    src={Harry1}
                    alt="harry"
                    className="cursor-pointer bg-cover w-[100%] h-[inset] tablette:h-[251px]"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse tablette:flex-row  laptop:flex-row">
                <div className="w-[inset] tablette:w-[50%] flex flex-col justify-start items-center text-center gap-4 bg-slate-200 p-6 ">
                  <span className="text-red-900 mt-3">T. HARV EKER</span>
                  <span className="font-semibold">LE SECRET D'UN ESPRIT MILLIONNAIRE</span>
                  <span className="text-red-900">$6</span>
                  <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
                </div>
                <div className="w-[inset] tablette:w-[50%]" onClick={() => setShowpayement(true)}>
                  <img
                    src={Harry3}
                    alt="harry"
                    className="cursor-pointer bg-cover w-[100%] h-[inset] tablette:h-[251px]"
                  />
                </div>
              </div>
            </section>
          </article>
          <h1 className="text-2xl tablette:text-5xl my-5 mb-2 tablette:mb-6 flex justify-center tablette:justify-start laptop:justify-start">
            Nos Formations
          </h1>
          <article className="flex flex-col tablette:flex-row">
            <section className="w-[inset] tablette:w-[33%]">
              <div className="ml-1 bg-black">
                <img
                  src={Formation}
                  alt="book"
                  className="bg-cover h-[inset] tablette:h-[522px] cursor-pointer"
                />
              </div>
            </section>
            <section className=" tablette:w-[33%]">
              <div
                className="flex flex-col gap-1 tablette:gap-6 my-6 py-0 tablette:py-4 px-4 tablette:px-8 mr-3
     text-center shadow-xl">
                <div className="flex flex-col">
                  <div className="text-red-900 text-lg"></div>
                  <div className="font-semibold text-2xl mt-0 tablette:mt-6 h-24 overflow-hidden">
                    Istagram Business à 1000$ par jour
                  </div>
                </div>
                <div className="flex flex-col desktop:justify-center">
                  <span className="text-red-900 text-2xl">$10</span>
                  <span className="line-through text-gray-500 desktop:ml-8 text-2xl">$15.32</span>
                </div>
                <div className="desktop:w-[100%] my-2">
                  <div className="flex justify-between desktop:flex-row desktop:justify-between mb-1">
                    <span>Solde: 10</span>
                    <span>Disponible: 60</span>
                  </div>
                  <div className="h-[10px] bg-gray-300 rounded-md">
                    <div className="w-[16%] h-[8px] bg-blue-400 rounded-md"></div>
                  </div>
                </div>
                <span>L'offre se termine dans:</span>
                <div className="flex flex-row justify-around desktop:gap- my-3">
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
              </div>
            </section>
            <section className="w-[100%] tablette:w-[34%] flex tablette:flex-col gap-4 ">
              <div className="flex w-[50%] tablette:w-[100%]">
                <div className="w-[100%]" onClick={() => setShowpayement(true)}>
                  <img
                    src={Formation1}
                    alt="harry"
                    className="w-[inset] bg-cover h-[inset] tablette:h-[250px] tablette:w-[100%] 
                    cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex w-[50%] tablette:w-[100%]">
                <div className="w-[100%]" onClick={() => setShowpayement(true)}>
                  <img
                    src={Formation2}
                    alt="harry"
                    className="w-[inset] bg-cover h-[inset] tablette:h-[250px] tablette:w-[100%] 
                    cursor-pointer"
                  />
                </div>
              </div>
            </section>
          </article>
          <article className="hidden my-10 tablette:my-6 tablette:justify-around">
            <section>
              <div
                className="flex flex-col justify-center items-center h-[650px] w-[350px] 
              rounded-2xl shadow-xl">
                <div className="h-[300px] w-[350px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer 
                    object-cover"
                  />
                </div>
                <div
                  className="flex flex-col justify-center items-center text-center gap-4 
                h-[350px] w-[350px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div
                    className="flex flex-row text-center h-12 w-[250px] bg-gray-100 
                  my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 
                      ring-white m-auto mt-1 ml-4 object-cover"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <span className="mr-2 cursor-pointer font-semibold">Jhon Doe</span>
                      <br />
                      <span className="mr-2 cursor-pointer">Blogeur international</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="hidden tablette:block">
              <div
                className="flex flex-col justify-center items-center h-[650px] w-[350px] 
              rounded-2xl shadow-xl">
                <div className="h-[300px] w-[350px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer 
                    object-cover"
                  />
                </div>
                <div
                  className="flex flex-col justify-center items-center text-center gap-4 
                h-[350px] w-[350px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div
                    className="flex flex-row text-center h-12 w-[250px] bg-gray-100 
                  my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 
                      ring-white m-auto mt-1 ml-4 object-cover"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <span className="mr-2 cursor-pointer font-semibold">Jhon Doe</span>
                      <br />
                      <span className="mr-2 cursor-pointer">Blogeur international</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="hidden tablette:block">
              <div
                className="flex flex-col justify-center items-center h-[650px] w-[350px] 
              rounded-2xl shadow-xl">
                <div className="h-[300px] w-[350px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer 
                    object-cover"
                  />
                </div>
                <div
                  className="flex flex-col justify-center items-center text-center gap-4 
                h-[350px] w-[350px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div
                    className="flex flex-row text-center h-12 w-[250px] bg-gray-100 
                  my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 
                      ring-white m-auto mt-1 ml-4 object-cover"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="book"
                    />
                    <div>
                      <span className="mr-2 cursor-pointer font-semibold">Jhon Doe</span>
                      <br />
                      <span className="mr-2 cursor-pointer">Blogeur international</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        <footer>
          <Footer />
        </footer>
      </article>
    </>
  );
};

export default Homepage;

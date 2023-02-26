import React, { useState } from 'react';
import Menus from '../components/Menus';
import Footer from '../components/Footer';
import Reduction from '../assets/reduction.svg';
import Livraison from '../components/Livraison';
import Categories from '../components/CategoriesSearch';
import Affiche from '../assets/Affiche.jpg';
import SousMenus from '../components/SousMenus';
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
            desktop:flex desktop:justify-center desktop:flex-col desktop:items-center
            ">
          <div
            className="flex justify-between w-full h-[30px] bg-slate-200
                tablette:flex tablette:justifiy-between tablette:w-full
                desktop:flex desktop:justify-between desktop:w-full">
            <div className="flex flex-row ml-2 gap-2 tablette:flex tablette:flex-row desktop:flex desktop:flex-row                                                                          ">
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
            <div className="flex desktop:flex-row desktop:gap-2">
              <select
                name="devise"
                id="devise"
                className="bg-gray-200 text-[10px] text-black outline-none cursor-pointer">
                <option value="1">USD</option>
                <option value="2">FC</option>
              </select>
              <select
                name="language"
                id="language"
                className="bg-gray-200 text-[10px] text-black outline-none cursor-pointer">
                <option value="1">French</option>
                <option value="2">English</option>
              </select>
            </div>
          </div>
          <Menus />
        </header>
        <main className="my-5 mx-5">
          <Payement onClose={HandlerOnclose} Visible={showpayment} />
          <article
            className="flex flex-col  laptop:m-0 desktop:m-2 justify-center
                    desktop:justify-center laptop:justify-center desktop:gap-3 tablette:flex-row

                                                                ">
            <section className="  mr-0 laptop:mr-0 xl:mr-2">
              <Categories />
            </section>
            <section className="flex   mr-0 laptop:mr-0 xl:mr-1 mt-4">
              <div
                className="flex flex-col justify-center items-center text-center p-8 pt-8 gap-6 text-laptop
                                                                                     bg-slate-200 w-[50%] laptop:text-base xl:text-laptop">
                <span className="text-red-900 mt-3">R. KIYOSAKI</span>
                <span className="font-semibold">GUIDE POUR INVESTIR</span>
                <span className="text-red-900">$13.22</span>
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
                  className="bg-cover h-[100%] cursor-pointer"
                />
              </div>
            </section>
            <section className="">
              <SousMenus />
              <section className="flex  gap-4 mt-4">
                <div
                  className="flex flex-col text-center p-8 pt-2 justify-center
                                                                                               items-center gap-4 text-laptop bg-slate-200 w-[50%] laptop:text-base xl:text-laptop">
                  <span className="text-red-900 mt-3">J.K ROWLING</span>
                  <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                  <span className="text-red-900">$13.22</span>
                  <button
                    onClick={() => setShowpayement(true)}
                    className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">
                    Lire plus
                  </button>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center
                                                                                               p-8 pt-2 gap-4 text-laptop bg-slate-200 w-[50%] laptop:text-base xl:text-laptop">
                  <span className="text-red-900 mt-3">J.K ROWLING</span>
                  <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                  <span className="text-red-900">$13.22</span>
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
          <h1 className="text-5xl mt-10 pb-5 flex justify-center tablette:justify-center laptop:justify-center desktop:justify-center">
            Nos Livres
          </h1>
          <article className="flex flex-col tablette:flex-row justify-center">
            <section className="">
              <div className="ml-1" onClick={() => setShowpayement(true)}>
                <img src={Harry2} alt="book" className="bg-cover  cursor-pointer" />
              </div>
            </section>
            <section className=" ">
              <InfoLivre />
            </section>
            <section className=" flex flex-col gap-4 desktop:flex desktop:gap-4 tablette:flex-row desktop:flex-row bg">
              <div className="flex flex-col  desktop:flex-row">
                <div className="flex flex-col justify-start items-center text-center gap-4 bg-slate-200 p-6 ">
                  <span className="text-red-900">NAPOLEON III</span>
                  <span className="font-semibold">REFLECHISSEZ ET DEVENEZ RICHE</span>
                  <span className="text-red-900">$13.22</span>
                  <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
                </div>
                <div className=" mt-4" onClick={() => setShowpayement(true)}>
                  <img
                    src={Harry1}
                    alt="harry"
                    className="cursor-pointer desktop:bg-cover desktoph-56 desktop:w-[100%]"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse desktop:flex-row  laptop:flex-row tablette:flex-row ">
                <div className="flex flex-col justify-start items-center text-center gap-4 bg-slate-200 p-6 ">
                  <span className="text-red-900 mt-3">T. HARV EKER</span>
                  <span className="font-semibold">LE SECRET D'UN ESPRIT MILLIONNAIRE</span>
                  <span className="text-red-900">$13.22</span>
                  <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
                </div>
                <div className="" onClick={() => setShowpayement(true)}>
                  <img
                    src={Harry3}
                    alt="harry"
                    className="bg-cover cursor-pointer desktop:bg-cover desktop:h-[280px] desktop:w-[100%]"
                  />
                </div>
              </div>
            </section>
          </article>

          <h1 className="text-4xl flex justify-center desktop:text-4xl my-4">Nos Formations</h1>
          <article className="flex flex-col desktop:flex desktop:flex-row">
            <section className="desktop:h-[500px] desktop:w-[33%]">
              <div className="ml-1 bg-black">
                <img
                  src={Formation}
                  alt="book"
                  className="bg-cover   desktop:w-[100%] desktop:h-[578px] cursor-pointer"
                />
              </div>
            </section>
            <section className=" desktop:w-[33%]">
              <InfoLivre />
            </section>
            <section className="desktop:w-[34%] flex desktop:flex-col desktop:gap-4 ">
              <div className="flex desktop:flex-row">
                <div className="desktop:w-[100%]" onClick={() => setShowpayement(true)}>
                  <img
                    src={Formation1}
                    alt="harry"
                    className="desktop:bg-cover desktop:h-[280px] desktop:w-[100%] cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="desktop:w-[100%]" onClick={() => setShowpayement(true)}>
                  <img
                    src={Formation2}
                    alt="harry"
                    className="desktop:bg-cover desktop:h-[280px] desktopw-[100%] cursor-pointer"
                  />
                </div>
              </div>
            </section>
          </article>
          <article className="flex flex-col  my-10 desktop:my-6 desktop:flex-row desktop:justify-around">
            <section>
              <div className="flex flex-col justify-center items-center h-[650px] w-[350px] rounded-2xl shadow-xl">
                <div className="h-[300px] w-[350px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer"
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-4 h-[350px] w-[350px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div className="flex flex-row text-center h-12 w-[250px] bg-gray-100 my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
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
            <section>
              <div className="flex flex-col justify-center items-center h-[650px] w-[350px] rounded-2xl shadow-xl">
                <div className="h-[300px] w-[350px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer"
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-4 h-[350px] w-[350px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div className="flex flex-row text-center h-12 w-[250px] bg-gray-100 my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
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
            <section>
              <div className="flex flex-col justify-center items-center h-[650px] w-[350px] rounded-2xl shadow-xl">
                <div className="h-[300px] w-[350px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer"
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-4 h-[350px] w-[350px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div className="flex flex-row text-center h-12 w-[250px] bg-gray-100 my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
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

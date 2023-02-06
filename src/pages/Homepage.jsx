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
import Formation from "../assets/Formation 1.svg"
import Formation1 from "../assets/Formation-relatif-1.svg"
import Formation2 from "../assets/Formation-relatif-2.svg"
import Bed from "../assets/Bed.jpg"


const Homepage = () => {
  return (
    <article className="">
      <header className="flex justify-center flex-col items-center">
        <div className="flex justify-between w-[1200px] h-[30px] bg-gray-300">
          <div className="flex flex-row ml-2 gap-4">
            <span>
              <img src={Reduction} alt="reduction cursor-pointer" />
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
              <span className="text-red-900">$13.22</span>
              <button className="py-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
            </div>
            <div className="w-[50%] bg-cover ">
              <img src={Affiche} alt="affiche" className="bg-cover h-[100%] cursor-pointer" />
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
              <img src={Harry2} alt="book" className="bg-cover h-[578px] w-[100%] cursor-pointer" />
            </div>
          </section>
          <section className="w-[33%]">
            <InfoLivre />
          </section>
          <section className="w-[34%] flex flex-col gap-4">
            <div className="flex flex-row">
              <div className="flex flex-col justify-start items-center text-center gap-4 bg-slate-200 p-6 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
              <div className="w-[50%]">
                <img
                  src={Harry1}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col justify-start items-center text-center gap-4 bg-slate-200 p-6 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
              <div className="w-[50%]">
                <img
                  src={Harry3}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
          </section>
        </article>
        <ButtonsRouge />
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
        <article className="flex flex-row justify-around mx-1 my-20">
          <section className="flex flex-col gap-14">
            <div className="flex flex-row w-[700px] h-[300px] rounded-2xl shadow-xl">
              <div className="w-[300px] h-[300px]">
                <img
                  src={Bed}
                  alt="bed"
                  className="bg-cover w-[300px] h-[100%] rounded-l-2xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-4 w-[400px] h-[300px] px-8 py-4 ">
                <span className="font-bold">
                  Netus vestibulum a vulputate sollicitudin id vitae convallis
                </span>
                <span className="text-md">
                  At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                  eu blandit lectus vestibulum egestas.
                </span>
                <div className="flex flex-row h-12 w-[250px] bg-gray-100 my-auto mt-3">
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
            <div>
              <div className="flex flex-row w-[700px] h-[300px] rounded-2xl shadow-xl">
                <div className="w-[300px] h-[300px]">
                  <img
                    src={Bed}
                    alt="bed"
                    className="bg-cover w-[300px] h-[100%] rounded-l-2xl cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[400px] h-[300px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div className="flex flex-row h-12 w-[250px] bg-gray-100 my-auto mt-3">
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
  );
}

export default Homepage
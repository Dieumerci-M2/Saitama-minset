import React from 'react'
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Blogs from "../assets/blogs.jpg";
import Footer from '../components/Footer';
import ButtonsRouges from '../components/ButtonsRouges';
import NewsLetter from '../components/NewsLetter';
import Blog1 from "../assets/Blog1.png"
import Blog2 from "../assets/blog2.png"
import Blog3 from '../assets/Blog3.png';
import Blog4 from '../assets/Blog4.png';

const Blogpage = () => {
  return (
    <article>
      <header>
        <section className="flex justify-between">
          <div className="w-[150px]  h-[50px] my-3 mr-2 mt-4 ml-2">
            <img src={Saitama} alt="logo" className="cursor-pointer" />
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
            className="flex gap-6 font-semibold mr-2 mt-2
            text-lg bg-gray-300 text-white border-gray-900 border-2 px-4 py-4 ">
            <span className="cursor-pointer ml-3">Home</span>
            <span className="cursor-pointer ">Formations</span>
            <span className="cursor-pointer ">Nos livres</span>
            <span className="cursor-pointer ">Blogs</span>
            <span className="cursor-pointer ">Contact</span>
          </div>
        </section>
      </header>
      <main className="my-10">
        <article>
          <section className="flex flex-row">
            <div className="w-[50%]">
              <img src={Blogs} alt="blog" className="bg-cover w-[100%] h-[100%] ml-1" />
            </div>
            <div
              className=" flex flex-col justify-center items-center
             text-center gap-10 w-[50%] p-10">
              <span className="text-2xl font-bold ">What is Lorem Ipsum?</span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essential...
              </span>
            </div>
          </section>
          <ButtonsRouges />
          <article className="flex flex-row justify-between ">
            <section className="grid grid-cols-2 gap-10 w-[68%] text-center ml-10">
              <div className="h-[300px] flex flex-col gap-2 w-[100%]">
                <img src={Blog1} alt="harry" className=" bg-cover h-[100%] cursor-pointer" />
                <span className="text-lg font-semibold">Comment ecrire un article de blog</span>
              </div>
              <div className="h-[300px] flex flex-col gap-2 w-[100%]">
                <img src={Blog2} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
                <span className="text-lg font-semibold">
                  Comment faire face au stress au travail
                </span>
              </div>
              <div className="h-[300px] flex flex-col gap-2 w-[100%]">
                <img src={Blog3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
                <span className="text-lg font-semibold">Post en wordpress, quid ?</span>
              </div>
              <div className="h-[300px] flex flex-col gap-2 w-[100%]">
                <img src={Blog4} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
                <span className="text-lg font-semibold">
                  Thème wordpress, comment le personaliser ?
                </span>
              </div>
            </section>
            <section className="mr-10">
              <NewsLetter />
            </section>
          </article>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default Blogpage
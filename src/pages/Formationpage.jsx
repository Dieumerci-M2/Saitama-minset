import React from 'react'
import Footer from '../components/Footer';
import Formation from '../assets/Formation 1.jpg';
import Formation1 from '../assets/facebook-ads.jpeg';
import Formation2 from '../assets/ech.jpg';
import InfoLivre from '../components/InfoLivre';
import NewsLetter from '../components/NewsLetter';
import FormReact1 from "../assets/Formation-relatif-2.jpg"
import FormReact2 from "../assets/Formation-relatif-1.png"
import FormReact3 from '../assets/facebook-ads.jpeg';
import FormReact4 from '../assets/Formation 1.jpg';
import { useNavigate } from 'react-router-dom';
import Menus from '../components/Menus';

const Formationpage = () => {
  const router = useNavigate();
  return (
    <article>
      <header className="">
        <Menus/>
      </header>
      <main className="m-5">
        <h1 className="text-5xl flex before:justify-center">Mes Videos</h1>
        <article className="flex flex-col tablette:flex-row">
          <section className="tablette:w-[33%] tablette:h-[500px]">
            <div className="ml-1 bg-black ">
              <img
                src={Formation}
                alt="book"
                className="tablette:bg-cover tablette:h-[578px] tablette:w-[100%] cursor-pointer mt-2"
              />
            </div>
          </section>
          <section className=" tablette:w-[33%]">
            <InfoLivre />
          </section>
          <section className="tablette:w-[34%] flex tablette:flex-col tablette:gap-4 flex-col ">
            <div className="flex flex-row">
              <div className="w-[100%]">
                <img
                  src={Formation1}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex tabletteflex-row">
              <div className="tablette:w-[100%]">
                <img
                  src={Formation2}
                  alt="harry"
                  className="bg-cover h-[280px] w-[100%] cursor-pointer"
                />
              </div>
            </div>
          </section>
        </article>
        <h1 className="tablette:text-5xl tablette:my-10 text-3xl justify-center">Les plus téléchargées</h1>
        <article className="flex flex-col tablette:flex-row tablette:justify-between">
          <section className="grid tablette:grid-cols-2 tablette:gap-10 tablette:w-[68%] text-center">
            <div className="tablette:h-[300px] flex-col flex tablette:flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={FormReact1} alt="harry" className=" bg-cover tablette:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Yomi Denzel, Dropshipping</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact2} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Infographie et design avec Canvas</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact3} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">Publicité avac facebook</span>
            </div>
            <div className="h-[300px] flex flex-col gap-2 w-[100%]">
              <img src={FormReact4} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">
                Faites-vous des millions grace à la pub instagram
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

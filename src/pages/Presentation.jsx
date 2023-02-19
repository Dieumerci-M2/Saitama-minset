import React from 'react';
import Pfooter from '../components/Pfooter';
import { Button } from '@material-tailwind/react';
import saitama from '../assets/saitama.png';
import Accueil from '../assets/Image-accueil1.svg';
import ReadBook1 from '../assets/Ellipse3.jpeg';
import ReadBook2 from '../assets/Ellipse4.svg';
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const router = useNavigate();
  return (
    // NavBar
    <>
      <nav className="relative mx-0 p-0">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img
              src={saitama}
              alt="Logo"
              className="border w-[80px] tablette:w-[100px] laptop:w-[150px] desktop:w-[150px]  m-2"
            />
          </div>
          <div className="space-x6 tablette:flex">
            <span
              className="cursor-pointer hover:text-blue-400 mr-1 text-sm mobile:text-sm 
              laptop:text-lg desktop:text-xl"
              id="inscription"
              onClick={() => {
                router('/register');
              }}>
              Inscription
            </span>
            <span
              onClick={() => {
                router('/auth');
              }}
              className="cursor-pointer hover:text-blue-400 mx-6 text-sm mobile:sm laptop:text-lg
               desktop:text-xl"
              id="connexion">
              Connexion
            </span>
            {/* Menu */}
          </div>
          <button
            id="btn-menu-mobile"
            className="block humburger  tablette:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* mobile Menu  */}
        <div className="tablette:hidden">
          <div
            id="menu"
            className="flex-col items-center hidden self-end py-8 mt-10 space-y-6
             font-bold bg-slate-600 bg-cover mobile:w-auto mobile:self-center left-6 right-6
             drop-shadow-md"
          >
            <span
              className="cursor-pointer hover:text-blue-400"
              id="inscription"
              onClick={() => {
                router('/register');
              }}>
              Inscription
            </span>
            <span
              onClick={() => {
                router('/auth');
              }}
              className="cursor-pointer hover:text-blue-400"
              id="connexion">
              Connexion
            </span>
          </div>
        </div>
      </nav>

      <section id="section">
        <div className=" bg-gray-200 container flex flex-col items-center pl-6 mx-0 mt-0 space-y-0 tablette:space-y-0  tablette:flex-row">
          <img src={Accueil} alt="Accueil" className="mt-8 bg-gray-200 text-gray-200" />
          <div className="flex flex-col mb-5 -space-y-6 tablette:w-1/2">
            <p className="text-4xl font-bold text-left tablette:text-4xl laptop:text-5xl mobile:text-2xl">
              Le meilleur investissement que tu puisse faire c'est d'investir dans toi même
            </p>
            <div className="text-center flex-col m-2 pt-4  text-gray-200 items-center">
              <div className="mt-14 text-lg text-left">
                <Button
                  onClick={() => {
                    router('/home');
                  }}
                  className="text-lg bg-red-700 ">
                  Continuer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center m-3 tablette:flex-col tablette:mt-2">
        {/* <div className=" tablette:justify-around p-10"> */}
        <div className="tablette:flex tablette:flex-row tablette:justify-around mt-2 tablette:mt-2">
          <img src={ReadBook1} alt="ReadBook" className="w-[250px] h-[250px] bg-#28a69b" />

          <img src={ReadBook2} alt="ReadBook" className="w-[250px] h-[250px]" />
        </div>

        <div
          className="flex flex-col justify-center
               align-center text-center gap-8">
          <span className="font-bold text-2xl">Plus tu apprends, Plus tu gagnes</span>
          <span className="">
            <Button
              onClick={() => {
                router('/home');
              }}
              className="text-lg bg-red-700">
              Découvrez nos programmes
            </Button>
          </span>
        </div>
        {/* </div> */}
      </section>
      <footer>
        <Pfooter />
      </footer>
    </>
  );
};

export default Presentation;

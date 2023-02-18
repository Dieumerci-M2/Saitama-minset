import React from 'react';
import Pfooter from '../components/Pfooter';
import { Button } from "@material-tailwind/react";
import saitama from "../assets/saitama.png";
import Accueil from "../assets/Image-accueil1.svg";
import ReadBook1 from "../assets/Ellipse3.jpeg";
import ReadBook2 from "../assets/Ellipse4.svg";
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const router = useNavigate()
  return (
    <article className="box-border overflow-hidden">
      <header className="fixed  w-full">
        <section className="flex  bg-white flex-row justify-between">
          <div className="border w-[150px]  h-[50px] m-2 ">
            <img src={saitama} alt="Logo" />
          </div>
          <div
            className="flex gap-10
                m-3 mr-10 font-medium text-lg">
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
        </section>
      </header>
      <main className="flex-col">
        <section className="bg-gray-200 flex">
          <div className="text-center flex-col m-10 pt-4 bg-gray-200 text-gray-200">
            <img
              src={Accueil}
              alt="Accueil"
              className="mt-8 bg-gray-200 text-gray-200"
            />
          </div>
          {/* <div className="text-center m-10 w-[50%]">
            <p className="font-200 text-2xl pt-10">
              Le meilleur investissement que tu puisse faire c'est d'investir dans toi même
            </p>
            <div className="mt-2 text-left text-lg">
              <Button
                onClick={() => {
                  router('/home');
                }}
                className="text-lg bg-red-700 ">
                Continuer
              </Button>
            </div>
          </div> */}
        </section>
        <section className="flex flex-col">
          <div className="flex justify-around p-10">
            <span>
              <img
                src={ReadBook1}
                alt="ReadBook"
                className="w-[250px] h-[250px] bg-#28a69b"
              />
            </span>
            <span>
              <img
                src={ReadBook2}
                alt="ReadBook"
                className="w-[250px] h-[250px]"
              />
            </span>
          </div>
          <div
            className="flex flex-col justify-center
               align-center text-center gap-8">
            <span className="font-bold text-2xl">Plus tu apprends, Plus t gagnes</span>
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
        </section>
      </main>
      <footer>
        <Pfooter />
      </footer>
    </article>
  );
}

export default Presentation
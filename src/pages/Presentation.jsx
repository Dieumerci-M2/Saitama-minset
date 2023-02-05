import React from 'react';
import Pfooter from '../components/Pfooter';
import { Button } from "@material-tailwind/react";
import saitama from "../assets/saitama.png";
import Accueil from "../assets/Image-accueil.svg";
import ReadBook1 from "../assets/Ellipse3.svg";
import ReadBook2 from "../assets/Ellipse2.svg";

const Presentation = () => {
  return (
    <article className="box-border overflow-hidden">
      <header className="fixed  w-full">
        <section className="flex  bg-white flex-row justify-between">
          <div className="border w-16  h-[50px] m-2 ">
            <img src={saitama} alt="Logo" />
          </div>
          <div
            className="flex gap-10
                m-3 mr-10 font-medium text-lg">
            <span className="cursor-pointer" id="inscription">
              Inscription
            </span>
            <span className="cursor-pointer" id="connexion">
              Connexion
            </span>
          </div>
        </section>
      </header>
      <main className="mb-10">
        <section className="bg-gray-200 flex justify-around">
          <div className="text-center flex justify-center items-center w-[50%] m-10 pt-4">
            <img src={Accueil} alt="Accueil" className="w-[60%] mt-8" />
          </div>
          <div className="text-center m-10 w-[50%]">
            <p className="font-bold text-5xl pt-10 pb-6 text-left mt-8">
              Le meilleur investissement que tu puisse faire c'est d'investir pour toi même
            </p>
            <div className="mt-2 text-left text-lg">
              <Button className="text-lg" color="red" w-3>
                Continuer
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex justify-around p-10">
            <span>
              <img src={ReadBook1} alt="ReadBook" className="w-[40%] ml-48" />
            </span>
            <span>
              <img src={ReadBook2} alt="ReadBook" className="w-[60%]" />
            </span>
          </div>
          <div
            className="flex flex-col justify-center
               align-center text-center gap-8">
            <span className="font-bold text-2xl">Plus tu apprends, Plus t gagnes</span>
            <span className="">
              <Button className="text-lg" color="red">
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
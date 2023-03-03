import React from 'react'
import Voiture from "../assets/Voiture.svg"
import Carte from "../assets/Carte.svg"
import Online from "../assets/Online.svg"
import Reduction from "../assets/Reduction.svg"

const Livraison = () => {

  return (
    <section className="flex flex-col text-lg justify-around my-10 tablette:flex-row-reverse 
    tablette:justify-around"
    >
      <div className="flex flex-row gap-4">
        <img src={Voiture} alt="voiture" className="w-[50px] h-[50px] mb-2" />
        <span
          className="text-red-700 font-semibold cursor-pointer w-40 lg:w-40
         pt-3 xl:w-56">
          Achat par Bitcoin
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <img src={Online} alt="online" className="w-[50px] h-[50px]" />
        <span className="text-red-700 font-semibold cursor-pointer pt-3">
          Achat par TRON
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="mb-4">
          <img src={Carte} alt="carte" className="w-[60px] h-[60px]" />
        </div>
        <span className="text-red-700 font-semibold cursor-pointer pt-3">Affiliation</span>
      </div>
      <div className="flex flex-row gap-4">
        <img src={Reduction} alt="reduction" className="w-[40px] h-[40px]" />
        <span className="text-red-700 font-semibold cursor-pointer pt-2">
          Reduction aux membres
        </span>
      </div>
    </section>
  );
}

export default Livraison
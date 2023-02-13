import React from 'react'
import Voiture from "../assets/Voiture.svg"
import Carte from "../assets/Carte.svg"
import Online from "../assets/Online.svg"
import Reduction from "../assets/Reduction.svg"

const Livraison = () => {

  return (
    <section className="flex flex-row justify-center gap-28 py-2 my-10 ">
      <div className="flex flex-row gap-4">
        <img src={Voiture} alt="voiture" className="w-[50px] h-[50px]" />
        <span className="text-red-700 font-semibold text-lg cursor-pointer w-[160px] pt-3">
          Achat par Bitcoin
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <img src={Online} alt="online" className="w-[50px] h-[50px]" />
        <span className="text-red-700 font-semibold text-lg cursor-pointer pt-3">
          Achat par TRON
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <div className='mb-4'>
          <img src={Carte} alt="carte" className="w-[60px] h-[60px]" />
        </div>
        <span className="text-red-700 font-semibold text-lg cursor-pointer pt-3">Affiliation</span>
      </div>
      <div className="flex flex-row gap-4">
        <img src={Reduction} alt="reduction" className="w-[40px] h-[40px]" />
        <span className="text-red-700 font-semibold text-lg cursor-pointer pt-2">
          Reduction aux membres
        </span>
      </div>
    </section>
  );
}

export default Livraison
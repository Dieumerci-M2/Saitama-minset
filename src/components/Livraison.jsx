import React from 'react'
import Voiture from "../assets/Voiture.svg"
import Carte from "../assets/Carte.svg"
import Online from "../assets/Online.svg"
import Reduction from "../assets/Reduction.svg"

const Livraison = () => {
  return (
    <section className="flex flex-row justify-center gap-28 py-2 my-10 ">
      <div className="flex flex-row gap-3">
        <img src={Voiture} alt="voiture" className="w-[30px] h-[30px] mt-3" />
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-red-700 font-semibold text-lg cursor-pointer">
            Livraison à Domicile
          </span>
          <span className="text-[10px]">A moindre coût de Transport</span>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <img src={Online} alt="online" className="w-[30px] h-[30px] mt-3" />
        <div className="flex flex-col justify-center gap-2">
          <span className="text-red-700 font-semibold text-lg cursor-pointer">Achat En ligne</span>
          <span className="text-[10px]">A moindre coût de Transport</span>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <img src={Carte} alt="carte" className="w-[30px] h-[30px] mt-3" />
        <div className="flex flex-col justify-center gap-2 items-center">
          <span className="text-red-700 font-semibold text-lg cursor-pointer">
            Achat par carte Bancaire
          </span>
          <span className="text-[10px]">A moindre coût de Transport</span>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <img src={Reduction} alt="reduction" className="w-[30px] h-[30px] mt-3" />
        <div className="flex flex-col justify-center gap-2 items-center">
          <span className="text-red-700 font-semibold text-lg cursor-pointer">
            Reduction aux membres
          </span>
          <span className="text-[10px]">A moindre coût de Transport</span>
        </div>
      </div>
    </section>
  );
}

export default Livraison
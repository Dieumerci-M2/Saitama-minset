import React from 'react'

const InfoLivre = () => {
  return (
    <section className="flex flex-col text-center p-12 justify-center items-center gap-6 shadow-xl">
      <span className="text-red-900 text-lg">J.K ROWLING</span>
      <span className="font-semibold text-2xl">HARRY POTTER AND THE CURSED CHILD</span>
      <div>
        <span className="text-red-900 text-2xl">$13.22</span>
        <span className="line-through text-gray-500 ml-8 text-2xl">$20.32</span>
      </div>
      <span className="text-xs p-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur atque sint consequuntur
        fugiat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur atque sint
        consequuntur fugiat
      </span>
      <div>
        <div className="flex flex-row justify-between">
          <span>Solde: 10</span>
          <span>Disponible: 60</span>
        </div>
        <div className="w-[335px] h-[10px] bg-gray-300 rounded-md">
          <div className="w-[64px] h-[8px] bg-blue-400 rounded-md"></div>
        </div>
      </div>
      <span>L'offre se termine dans:</span>
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="p-4 bg-gray-400 rounded-md text-2xl font-semibold">00</span>
          <span className="text-[8px]">Hours</span>
        </div>
        <span className="mt-2 rounded-md text-4xl font-semibold">:</span>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="p-4 bg-gray-400 rounded-md text-2xl font-semibold">00</span>
          <span className="text-[8px]">Minutes</span>
        </div>
        <span className="mt-2 rounded-md text-4xl font-semibold">:</span>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="p-4 bg-gray-400 rounded-md text-2xl font-semibold">00</span>
          <span className="text-[8px]">Secondes</span>
        </div>
      </div>
    </section>
  );
}

export default InfoLivre
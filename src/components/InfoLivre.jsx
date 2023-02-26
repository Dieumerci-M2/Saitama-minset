import React from 'react'

const InfoLivre = () => {
  return (
    <section className="flex flex-col desktop:flex-col my-3 mx-3 text-center desktop:p-10 desktop:lg:p-8  desktop:justify-center desktop:items-center desktop:gap-3 shadow-xl">
      <div classname="flex flex-col">

        <div className="text-red-900 text-lg">CHRISTOPHER SOYTOROV</div>
        <div className="font-semibold text-2xl">GUIDE DE L'APPRENTIS MILLIONNAIRE</div>
      </div>
      <div className="flex flex-col desktop:justify-center">
        <span className="text-red-900 text-2xl">$13.22</span>
        <span className="line-through text-gray-500 desktop:ml-8 text-2xl">$20.32</span>
      </div>
      <span className="text-xs p-1 flex justify-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur atque sint consequuntur
        fugiat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur atque sint
        consequuntur fugiat
      </span>
      <div className="desktop:w-[100%] my-2">
        <div className="flex justify-between desktop:flex-row desktop:justify-between">
          <span>Solde: 10</span>
          <span>Disponible: 60</span>
        </div>
        <div className=" desktop:h-[10px] bg-gray-300 rounded-md">
          <div className="desktop:w-[16%] h-[8px] bg-blue-400 rounded-md"></div>
        </div>
      </div>
      <span>L'offre se termine dans:</span>
      <div className="flex flex-row justify-around desktop:gap- my-3">
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
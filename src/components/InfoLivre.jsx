import React from 'react'

const InfoLivre = () => {
  return (
    <section className="flex flex-col gap-1 tablette:gap-6 my-6 py-0 tablette:py-4 px-4 tablette:px-8 mr-3
     text-center shadow-xl">
      <div classname="flex flex-col">

        <div className="text-red-900 text-lg">CHRISTOPHER SOYTOROV</div>
        <div className="font-semibold text-2xl mt-0 tablette:mt-6">GUIDE DE L'APPRENTIS MILLIONNAIRE</div>
      </div>
      <div className="flex flex-col desktop:justify-center">
        <span className="text-red-900 text-2xl">$6</span>
        <span className="line-through text-gray-500 desktop:ml-8 text-2xl">$10.32</span>
      </div>
      <div className="w-[100%] my-2">
        <div className="flex justify-between mb-1">
          <span>Solde: 10</span>
          <span>Disponible: 60</span>
        </div>
        <div className="h-[10px] bg-gray-300 rounded-md">
          <div className="w-[16%] h-[8px] bg-blue-400 rounded-md"></div>
        </div>
      </div>
      <span>L'offre se termine dans:</span>
      <div className="flex flex-row justify-around my-3">
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
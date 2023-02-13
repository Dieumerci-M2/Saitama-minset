import React from 'react'
import { Button } from '@material-tailwind/react';

const PaiyementModal = ( { Visible, Desciption, Prix, onClose } ) => {
    
    if ( !Visible ) return null;
    
  return (
    <article
      className="fixed inset-0 bg-black
       bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
      <main className="bg-white w-[400px] h-[500px] rounded-lg p-10">
        <section>
          <div className="w-[300px] h-[120px]">Description : {Desciption}</div>
          <div className="my-8">Prix : {Prix}</div>
        </section>
        <section className="flex flex-col gap-4">
          <input
            type="text"
            name="cles"
            className="w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md"
            placeholder="Entrer votre email"
          />
          <input
            type="text"
            name="cles"
            className="w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md"
            placeholder="Entrez votre adresse Bitcoin/TRON"
          />
        </section>
        <section className="mt-8">
          <span>Choisissez votre mode de paiement</span>
          <div className="text-center mt-4 flex flex-row justify-between">
            <Button onClick={onClose} variant="filled" className="w-[100px] bg-[#1E7DBD]">
              Bitcoin
            </Button>
            <Button onClick={onClose} variant="filled" className="w-[100px] bg-[#1E7DBD]">
              TRON
            </Button>
          </div>
        </section>
      </main>
    </article>
  );
};

export default PaiyementModal
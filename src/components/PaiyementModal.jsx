import React from 'react'
import { Button } from '@material-tailwind/react';

const PaiyementModal = ( { Visible, Desciption, Prix, Onclose } ) => {
    
    if ( !Visible ) return null;
    
  return (
    <article
      className="fixed inset-0 bg-black
       bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <section className="bg-white w-[400px] h-[500px] rounded-lg p-10">
        <div>Description : {Desciption}</div>
        <div className="my-5">Prix : { Prix }</div>
        <input type="text" name='cles' className='w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md' placeholder='Entrer votre clé'/>
        <div className="text-center relative top-4 ">
          <Button onClick={Onclose} variant="filled">
            Buy Now
          </Button>
        </div>
      </section>
    </article>
  );
};

export default PaiyementModal
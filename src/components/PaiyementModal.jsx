import React from 'react'
import { Button } from '@material-tailwind/react';

const PaiyementModal = ({ Visible, Desciption, Prix, onClose }) => {
  if (!Visible) return null;
  return (
    <article
      className="fixed inset-0 bg-black
       bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <section className="bg-white w-[400px] h-[500px] rounded-lg p-10">
        <div>Description : {Desciption}</div>
        <div className="my-5">Prix : {Prix}</div>
        <div className="text-center relative top-4 ">
          <Button onClick={onClose} variant="filled">
            Buy Now
          </Button>
        </div>
      </section>
    </article>
  );
};

export default PaiyementModal
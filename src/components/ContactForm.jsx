import React from 'react';

import './Auth.css';

import Forms from './Forms';

function ContactForm() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-[#1E7DBD]
        w-[472px] h-[460px]">
        <p className="flex text-5xl font-bold px-10 py-20 text-white "> Entrez vos informations</p>
      </div>
      <div className="flex">
        <Forms />
      </div>
    </div>
  );
}

export default ContactForm
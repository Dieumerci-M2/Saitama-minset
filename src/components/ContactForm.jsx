import React from 'react';

import './Auth.css';

import Forms from './Forms';

function ContactForm() {
  return (
    <div className="flex justify-center items-center max-mobile:flex max-mobile:flex-col max-tablette:flex max-tablette:flex-col ">
      <div className="bg-[#1E7DBD]
        w-[472px] h-[460px] max-mobile:bg-white max-tablette:bg-white max-mobile:h-10 max-tablette:h-10">
        <p className="flex text-5xl font-bold px-10 py-20 text-white max-mobile:text-lg max-mobile:text-black max-tablette:text-lg max-tablette:text-black"> Entrez vos informations</p>
      </div>
      <div className="flex">
        <Forms />
      </div>
    </div>
  );
}

export default ContactForm
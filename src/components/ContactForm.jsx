import React from 'react';

import { Input } from '@material-tailwind/react';

import './Auth.css';

import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';
import Menus from './Menus';
import Footer from './Footer';
import Forms from './Forms';

function ContactForm() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-blue-400 w-[472px] h-[460px]">
        <p className="flex text-5xl font-bold px-10 py-20 text-white "> Entrez vos informations</p>
      </div>
      <div className='flex'>
        <Forms />
      </div>
    </div>

  )
}

export default ContactForm
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

    <div className="flex items-center gap-10 mt-14 ">
      <div className="imgBackLogin">
        <p className="flex text-5xl font-bold p-10 text-white"> Entrez vos informations</p>
        <p className="p-5 text-white mb-10">Dites quelques chose pour demarrer un chat en direct <br /><br /><p> <span> ☎ <span>+229970580581</span> </span></p> <br /> <p className='flex gap-3'><span><BsFillEnvelopeOpenFill /></span><span>demomail@gmail.com</span></p> <br /></p>
      </div>

      <div className='flex w-full'>

        <Forms />

      </div>

    
    </div>

  )
}

export default ContactForm
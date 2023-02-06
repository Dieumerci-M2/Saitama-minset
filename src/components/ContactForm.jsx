import React from 'react';

import { Input } from '@material-tailwind/react';

import './Auth.css';

import { BsFillTelephoneOutboundFill }  from 'react-icons/bs';
import { BsFillEnvelopeOpenFill }  from 'react-icons/bs';
import Menus from './Menus';

function ContactForm() {
  return (
  
    <div className="flex flex-row items-center justify-between mt-14 ">     
        <div className="imgBackLogin">
        <p className="flex text-5xl font-bold p-10 text-white"> Entrez vos informations</p>
        <p className="p-5 text-white mb-10">Dites quelques chose pour demarrer un chat en direct <br /><br /><p> <span> ☎ <span>+229970580581</span> </span></p> <br /> <p className='flex gap-3'><span><BsFillEnvelopeOpenFill /></span><span>demomail@gmail.com</span></p> <br /></p>
        </div>

    <div className='flex flex-row gap-20 ml-10 w-300'>
        <span>
        <Input variant="standard" label="Entrez votre nom" />
        <Input variant="standard" label="Entrez votre postnom" />
        </span>

        <span>
        <Input variant="static" label="Standard" />
        <Input variant="static" label="Standard" />
        </span>

        <p className="flex text-5xl font-bold p-10 text-white">
          Entrez vos informations
        </p>
        <p className="p-10 text-white mb-10">
          Dites quelques chose pour demarrer un chat en direct
          <br /><br />
          <span className='flex flex-row gap-5'>
            <BsFillTelephoneOutboundFill color='white' />
            <span className=''>+2479876543218</span>
          </span><br />
          <span><BsFillEnvelopeOpenFill />
          </span>
          <span>
          </span>
        </p>     
        </div>
    </div>
  )
}

export default ContactForm
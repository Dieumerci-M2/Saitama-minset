import React from 'react';
import './Auth.css';
import imgLog from "../components/img/imgLog.png"
import { BsFillTelephoneOutboundFill }  from 'react-icons/bs';
import { BsFillEnvelopeOpenFill }  from 'react-icons/bs';

function ContactForm() {
  return (
    
    <div className="flex flex-row flex-wrap items-center mt-14 ">     
        <div className="imgBackLogin">
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
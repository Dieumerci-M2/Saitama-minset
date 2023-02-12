import React from 'react'
import CategoriesSearch from '../components/CategoriesSearch'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Saitama from '../assets/saitama.png';
import { useNavigate } from 'react-router-dom';

const Contactpage = () => {
  const router = useNavigate();
  return (
    <div>
      <div className="">
        <section className="flex justify-between mx-10">
          <div className="w-[150px]  h-[50px] my-3 mr-2 mt-4 ml-2">
            <a href="https://t.me/Moneygrr" target="_blank">
              <img src={Saitama} alt="logo" className="cursor-pointer" />
            </a>
          </div>
          <div
            className="flex gap-10 font-semibold mr-1
        text-lg bg-gray-300 text-white border-gray-900 border-2 px-4 py-4 ">
            <span onClick={() => router('/home')} className="cursor-pointer">
              Home
            </span>
            <span onClick={() => router('/formation')} className="cursor-pointer ">
              Formations
            </span>
            <span onClick={() => router('/books')} className="cursor-pointer ">
              Nos livres
            </span>
            <span onClick={() => router('/contact')} className="cursor-pointer ">
              Contact
            </span>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center text-center mb-20 mt-16">
        <ContactForm />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Contactpage
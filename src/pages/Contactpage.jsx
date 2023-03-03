import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import Reduction from '../assets/reduction.svg';
import Menus from '../components/Menus';
const Contactpage = () => {
  const router = useNavigate();
  return (
    <div>
        <header
          className="flex justify-center flex-col items-center                        
            tablette:flex tablette:justifiy-center tablette:flex-col tablette:items-center
           tablette:justify-center
            ">
          <div
            className="flex justify-between w-full h-[30px] tablette:h-[40px] bg-slate-200
                tablette:flex tablette:justifiy-between tablette:w-full
                desktop:flex tablette:justify-between">
            <div className="flex flex-row ml-2 gap-2 tablette:flex tablette:flex-row">
              <span className="m-auto">
                <img src={Reduction} alt="reduction" className="text-black cursor-pointer" />
              </span>
              <a href="https://git.io/typing-svg" className="my-auto mt-1">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=timenewreman&weight=400&size=23&duration=2500&pause=1000&color=7C3AED&background=8672FF00&width=460&lines=Nos+réductions+vont+jusqu’à+70%"
                  alt="Typing SVG"
                  className="flex justify-center"
                />
              </a>
            </div>
            <div className="flex tablette:flex-row tablette:gap-2">
              <select
                name="devise"
                id="devise"
                className="bg-gray-200 text-sm tablette:text-base text-black outline-none 
                cursor-pointer">
                <option value="1">USD</option>
                <option value="2">FC</option>
              </select>
              <select
                name="language"
                id="language"
                className="bg-gray-200 text-sm tablette:text:base text-black outline-none 
                cursor-pointer">
                <option value="1">French</option>
                <option value="2">English</option>
              </select>
            </div>
          </div>
          <Menus />
        </header>
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
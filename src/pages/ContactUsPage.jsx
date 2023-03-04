import React from 'react'
import Menus from "../components/Menus"
import Footer from "../components/Footer"
import Reduction from '../assets/reduction.svg'
import Categories from '../components/CategoriesSearch'
import Affiche from '../assets/Affiche.jpg'
import ContactForm from '../components/ContactForm'

const ContactUsPage = () => {
  return (
    <article className="">
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
      <main className="my-[30px]">
        <article className="flex flex-row gap-4">
          <section className="ml-2">
            <Categories />
          </section>
          <section className="flex flex-row">
            <div
              className="flex flex-col justify-center items-center text-center p-8 pt-8 gap-6 text-lg
             bg-slate-200 w-[50%]">
              <span className="text-red-900 mt-3">J.K ROWLING</span>
              <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
              <span className="text-red-900"> $13.22 </span>
              <button className="py-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
            </div>
            <div className="w-[50%] bg-cover ">
              <img src={Affiche} alt="affiche" className="bg-cover h-[50%]" />
            </div>
          </section>
          <section>
            <SousMenus />
            <section className="flex flex-row mr-1 gap-4 mt-4">
              <div
                className="flex flex-col text-center p-8 pt-2 justify-center
               items-center gap-4 text-lg bg-slate-200 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
              <div
                className="flex flex-col text-center justify-center items-center
               p-8 pt-2 gap-4 text-lg bg-slate-200 w-[50%]">
                <span className="text-red-900 mt-3">J.K ROWLING</span>
                <span className="font-semibold">HARRY POTTER AND THE CURSED CHILD</span>
                <span className="text-red-900">$13.22</span>
                <button className="py-1 mt-1 px-4 text-white bg-[#1E7DBD] w-28">Lire plus</button>
              </div>
            </section>
          </section>
        </article>

        <article className="flex p-10 flex-row">
          <section>
            <ContactForm />
          </section>
        </article>
        <article></article>
        <article>
          <div></div>
          <div></div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default ContactUsPage
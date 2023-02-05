import React from 'react'
import Menus from "../components/Menus"
import Footer from "../components/Footer"
import Reduction from '../assets/reduction.svg'
import Livraison from '../components/Livraison'
import Categories from '../components/CategoriesSearch'
import Affiche from '../assets/Affiche.jpg'
import SousMenus from '../components/SousMenus'
import ButtonsRouge from '../components/ButtonsRouges'
import InfoLivre from '../components/InfoLivre'

const Homepage = () => {
  return (
    <article className="">
      <header className="flex justify-center flex-col items-center">
        <div className="flex justify-between w-[1200px] h-[30px] bg-gray-300">
          <div className="flex flex-row ml-2 gap-4">
            <span>
              <img src={Reduction} alt="reduction" />
            </span>
            <span className="text-white">Nos réductions vont jusqu’à 70%</span>
          </div>
          <div className="flex flex-row gap-2">
            <select name="devise" id="devise" className="bg-gray-300 text-white">
              <option value="1">USD</option>
              <option value="2">Fc</option>
            </select>
            <select name="language" id="language" className="bg-gray-300 text-white">
              <option value="1">French</option>
              <option value="2">English</option>
            </select>
          </div>
        </div>
        <Menus />
      </header>
      <main className="mx-16 my-[30px]">
        <article className='flex flex-row'>
          <section className="ml-2">
            <Categories />
          </section>
          <section>
            <div>
              <span>J.K ROWLING</span>
              <span>HARRY POTTER AND THE CURSED CHILD</span>
              <span>$13.22</span>
              <button className="py-1 px-4 text-white bg-[#1E7DBD]">Lire plus</button>
            </div>
            <div>
              <img src={Affiche} alt="affiche" />
            </div>
          </section>
          <section>
            <SousMenus />
            <div>

            </div>
            <div>

            </div>
          </section>
        </article>
        <Livraison />
        <article>
          <section>
            <div>
              <img src="" alt="book" />
            </div>
          </section>
          <section>
            <InfoLivre/>
          </section>
          <section>
            <div>

            </div>
            <div>

            </div>
          </section>
        </article>
        <ButtonsRouge/>
        <article>

        </article>
        <article>
          <div>

          </div>
          <div>

          </div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default Homepage
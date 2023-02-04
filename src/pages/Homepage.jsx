import React from 'react'
import Menus from "../components/Menus"
import Footer from "../components/Footer"

const Homepage = () => {
  return (
    <article className="">
      <header className="flex justify-center flex-col items-center">
        <div className="w-[1200px] h-[30px] bg-gray-300">
          <div>
            <span></span>
            <span></span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <Menus />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default Homepage
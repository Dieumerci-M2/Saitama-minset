import React from 'react'
import Saitama from "../assets/saitama.png"
// import { FaSearch } from 'react-icons/bs';
const Menus = () => {
  return (
    <section>
      <div>
        <img src={Saitama} alt="logo" />
      </div>
      <div className="flex bg-gray-100 p-4 w-72 rounded-lg">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg> */}
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Rechercher un Livre"
        />
      </div>
      <div></div>
      <div></div>
    </section>
  );
}

export default Menus

import React from 'react'
import Saitama from "../assets/saitama.png"
// import { FaSearch } from 'react-icons/bs';
const Menus = () => {
  return (
    <section>
      <div>
        <img src={Saitama} alt="logo" />
      </div>
      <div>
            <input class="" placeholder='Rechercher un livre' />
              <button>Categories</button> 
            {/* <FaSearch />   */}
      </div>
      <div></div>
      <div></div>
    </section>
  );
}

export default Menus

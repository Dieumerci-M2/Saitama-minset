import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const router = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-5 border border-red-100 shadow-sm py-10 px-10 shadow-slate-800 ">
        <li>
          <AiOutlineClose className="w-20 h-20" onClick={() => setClose(false)} />
        </li>
        <li
          className="text-xl hover:text-red-400 border  shadow-xl cursor-pointer"
          onClick={() => router('/formation')}>
          Formation
        </li>
        <li
          className="text-xl hover:text-red-400 shadow-xl cursor-pointer"
          onClick={() => router('/books')}>
          Nos Livres
        </li>
        <li className="text-xl hover:text-red-400 shadow-xl cursor-pointer">À propos</li>
        <li
          className="text-xl hover:text-red-400 shadow-xl cursor-pointer"
          onClick={() => router('/contact')}>
          Contact
        </li>
      </div>
    </>
  );
}

export default Navigation;

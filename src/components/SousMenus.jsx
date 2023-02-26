import React from 'react'
import { useNavigate } from 'react-router-dom';

const SousMenus = () => {
   const router = useNavigate();
  return (
    <div
      className="flex flex-col tablette:flex-row gap-8 mr-5 text-blue-500 font-semibold justify-between
         laptop:text-base xl:text-laptop xl:px-10 py-4 ">
      <div onClick={() => router('/home')} className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Home
      </div>
      <div
        onClick={() => router('/formation')}
        className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Formations
      </div>
      <div onClick={() => router('/books')} className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Nos livres
      </div>
      <div onClick={() => router('/contact')} className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Contact
      </div>
    </div>
  );
}

export default SousMenus

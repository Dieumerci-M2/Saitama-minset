import React from 'react'
import { useNavigate } from 'react-router-dom';

const SousMenus = () => {
   const router = useNavigate();
  return (
    <div
      className="flex gap-10 font-semibold mr-1 mt-4
        text-lg bg-gray-300 border-2 px-12 py-4 ">
      <span onClick={() => router('/home')} className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Home
      </span>
      <span
        onClick={() => router('/formation')}
        className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Formations
      </span>
      <span onClick={() => router('/books')} className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Nos livres
      </span>
      <span onClick={() => router('/contact')} className="cursor-pointer hover:text-blue-[#1E7DBD]">
        Contact
      </span>
    </div>
  );
}

export default SousMenus

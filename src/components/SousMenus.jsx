import React from 'react'
import { useNavigate } from 'react-router-dom';

const SousMenus = () => {
   const router = useNavigate();
  return (
    <div
      className="flex gap-10 font-semibold mr-1
        text-lg bg-gray-300 text-white border-gray-900 border-2 px-4 py-4 ">
      <span onClick={()=>router('/home')} className="cursor-pointer ml-8">
        Home
      </span>
      <span onClick={()=> router('/formation')} className="cursor-pointer ">
        Formations
      </span>
      <span onClick={()=> router('/books')} className="cursor-pointer ">
        Nos livres
      </span>
      <span onClick={()=> router('/contact')} className="cursor-pointer ">
        Contact
      </span>
    </div>
  );
}

export default SousMenus

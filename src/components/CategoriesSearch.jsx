import React from 'react'
import { BsList } from 'react-icons/bs';
import {  BsChevronRight } from 'react-icons/bs';
  
function CategoriesSearch() {
  return (
    <div className='flex flex-col p-2 w-64 border-b-2 border-[white]-600 bg-gray-200'>
      <div className='flex flex-row w-[100%] justify-between'>
      <div className=' flex border-b-2 p-2 border-blue-400 bg-[red]'>
        <span className='flex  text-white flex-row justify-around gap-2'><BsList size={40} color={"white"} />Rechercher une catégorie</span>
        </div>
      </div>
        <div className='flex flex-column flex-wrap justify-between'>  
        <span className='border-b-2 border-blue-400 p-3 w-full'>Selon le prix des livres </span>
        <p className='border-b-2 border-blue-400 p-3 w-full'>Selon le prix des livres</p>
        <p className='border-b-2 border-blue-400 p-3 w-full'>Selon le prix des livres</p>
        <p className='border-b-2 border-blue-400 p-3 w-full'>Selon le prix des livres</p>
        <p className='border-b-2 border-blue-400 p-3 w-full' >Selon le prix des livres</p>
        <p className='border-b-2 border-blue-400 p-3 w-full'>Selon le prix des livres</p>
    </div>
        
    </div>
  )
}

export default CategoriesSearch
import React from 'react'

function Rechercher() {
  return (
    
        <div className='flex justify-center'>
            <div className="flex items-center p-2 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition duration-500">
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="Rechercher une catégorie..." />
      </div>
      <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <span>Toutes les catégorie</span>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Rechercher</span>
      </div>
    </div>


        </div>
    
  )
}

export default Rechercher
import React from 'react'

const SousMenus = () => {
  return (
      <div className="flex gap-10 font-semibold mr-1
        text-lg bg-gray-300 text-white border-gray-900 border-2 px-4 py-4 "
      >
      <span className="cursor-pointer ml-3">Home</span>
      <span className="cursor-pointer ">Formations</span>
      <span className="cursor-pointer ">Nos livres</span>
      <span className="cursor-pointer ">Blogs</span>
      <span className="cursor-pointer ">Contact</span>
    </div>
  );
}

export default SousMenus

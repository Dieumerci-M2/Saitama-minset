import React from 'react'

function Header() {
    return (
        <>
            <header className="">
                <section className="flex flex-col desktop:justify-between ">
                    <div className="w-[150px]  h-[50px] my-3 mr-2 mt-4 desktop:ml-2">
                        <a href="https://t.me/Moneygrr" target="_blank">
                            <img src={Saitama} alt="logo" className="cursor-pointer" />
                        </a>
                    </div>
                    <div className="flex flex-row mt-6 desktop:mx-4 rounded-l-xl h-10 ml-2 mr-2">
                        <input
                            className="placeholder:italic placeholder:text-slate-400 block
             bg-gray-100 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm 
             focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
             sm:text-sm rounded-l-xl"
                            type="text"
                            placeholder="Rechercher un Livre..."
                            placeholder:italic
                        />
                        <select className="p-2 outline-none focus:border-sky-500 focus:ring-sky-500">
                            <option>Catégories</option>
                            <option>Selon le prix des livres</option>
                            <option>Selon le prix des livres</option>
                        </select>
                        <span className="desktop:w-20 desktop:h-10 bg-red-700 cursor-pointer">
                            <img src={Search} alt="Search" className="m-auto my-2 text-[#FFFFFF]" />
                        </span>
                    </div>
                    <div
                        className="flex justify-between font-semibold mr-2 mt-4 ml-2
        text-lg bg-gray-300 border-2 px-4 py-4 ">
                        <span onClick={() => router('/home')} className="cursor-pointer hover:text-[#1E7DBD]">
                            Home
                        </span>
                        <span
                            onClick={() => router('/formation')}
                            className="cursor-pointer hover:text-[#1E7DBD]">
                            Formations
                        </span>
                        <span onClick={() => router('/books')} className="cursor-pointer hover:text-[#1E7DBD]">
                            Nos livres
                        </span>
                        <span
                            onClick={() => router('/contact')}
                            className="cursor-pointer hover:text-[#1E7DBD]">
                            Contact
                        </span>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header

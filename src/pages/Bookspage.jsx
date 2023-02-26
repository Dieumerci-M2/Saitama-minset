import React from 'react'
import Harry1 from '../assets/BooksReal.jpg';
import Harry2 from '../assets/auto.jpg';
import Harry3 from '../assets/cashflow.jpg';
import Entre from '../assets/entre.jpg';
import InfoLivre from '../components/InfoLivre';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import { useNavigate } from 'react-router-dom';
import Menus from '../components/Menus';


const Bookspage = () => {
  const router = useNavigate();
  return (
    <article>
      <header className="mx-10">
       <Menus/>
      </header>
      <main className="my-10">
        <h1 className="tablette:text-5xl tablette:my-10 text-3xl flex justify-center">Mes Collections</h1>
        <article className="flex flex-col tablette:flex-row">
          <section className="tablette:w-[33%] tablette:h-[500px] mx-2">
            <div className="tablette:ml-1">
              <img src={Harry2} alt="book" className="bg-cover h-[578px] w-[100%] cursor-pointer" />
            </div>
          </section>
          <section className="tablette:w-[33%]">
            <InfoLivre />
          </section>
          <section className="tablette:w-[34%] flex flex-col tablette:flex-col tablette:gap-4 my-3">
            <div className="tablette:w-[100%] my-3 mx-4">
              <img
                src={Harry1}
                alt="harry"
                className="bg-cover tablette:h-[280px] tablette:w-[100%] cursor-pointer"
              />
            </div>
            <div className="tablette:w-[100%] my-3 mx-4">
              <img
                src={Harry3}
                alt="harry"
                className="bg-cover h-[280px] w-[100%] cursor-pointer"
              />
            </div>
          </section>
        </article>
        <h1 className="tablette:text-5xl text-3xl tablette:my-3 flex justify-center">Les plus achetés</h1>
        <article className="flex tablette:flex-row tablette:justify-between flex-col ">
          <section className="tablette:grid tablette:grid-cols-2 tablette:gap-10 tablette:w-[68%] text-center my-7 mx-5">
            <div className="tablette:h-[300px] flex flex-col tablette:flex-col gap-2 tablette:w-[100%]">
              <img src={Harry2} alt="harry" className=" bg-cover tablette:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">L'AUTOROUTE DU MILLIONNAIRE</span>
            </div>
            <div className="tablette:h-[300px] flex flex-col  tablette:flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={Harry3} alt="harry" className="bg-cover tablette:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">LE QUADRANT DU CASHFLOW</span>
            </div>
            <div className="tablette:h-[300px] flex flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={Harry1} alt="harry" className="bg-cover tablette:h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold"></span>
            </div>
            <div className="tablette:h-[300px] flex-col flex tablette:flex-col tablette:gap-2 tablette:w-[100%]">
              <img src={Entre} alt="harry" className="bg-cover h-[100%] cursor-pointer" />
              <span className="text-lg font-semibold">L'ENTREPRENEUR DU 21E SIECLE</span>
            </div>
          </section>
          <section className="">
            <NewsLetter />
          </section>
        </article>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </article>
  );
}

export default Bookspage

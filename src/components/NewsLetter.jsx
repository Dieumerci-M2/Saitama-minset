import React from 'react'
import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"
import Linkedin from "../assets/linkedin.png"
import Telegram from "../assets/logos_telegram.png"
import Toppost from "../assets/Topblog.png"

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-3 mt-1 desktop:gap-4 desktop:mt-20">
      <h1 className="text-start text-2xl flex justify-center font-bold">NEWSLETTER</h1>
      <div className="flex flex-row h-10 rounded-2xl w-[300px] justify-center ml-5">
        <input className="w-[50%] bg-slate-200 rounded-l-3xl"></input>
        <span className="w-[50%] bg-red-700 text-center pt-2 cursor-pointer text-[#FFFFFF] rounded-r-3xl">
          Soumettre
        </span>
      </div>
      <h1 className="text-start text-2xl flex justify-center font-bold">FOLLOW US</h1>
      <div className="flex desktop:flex-col justify-around desktop:gap-2">
        <div className="flex gap-4 ">
          <img src={Facebook} alt="facebook" className="w-[50px] h-[50px] cursor-pointer" />
          <span className="cursor-pointer my-auto ">Facebook</span>
        </div>
        <div className="flex gap-4 ">
          <a href="https://t.me/Moneygrr" target="_blank">
            <img src={Telegram} alt="telegram" className="w-[50px] h-[50px] cursor-pointer" />
          </a>
          <span className="cursor-pointer my-auto">Telegram</span>
        </div>
      </div>
      <h1 className="desktop:text-start text-2xl  flex justify-center font-bold">TOP POST</h1>
      <div className="flex desktop:flex-row mb-2">
        <div className="desktop:w-36 desktop:h-36">
          <img src={Toppost} alt="toppost" className="bg-cover desktop:w-[100%] desktop:h-[100%]" />
        </div>
        <div className="flex flex-col gap-2 justify-center w-36 h-36 p-4">
          <span className="typcn typcn-spanner">LOREM</span>
          <span className="text-[10px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter
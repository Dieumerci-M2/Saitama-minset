import React from 'react'
import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"
import Linkedin from "../assets/linkedin.png"
import Telegram from "../assets/logos_telegram.png"
import Toppost from "../assets/Topblog.png" 

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-6 my-10">
      <h1 className="text-start text-2xl font-bold">NEWSLETTER</h1>
      <div className="flex flex-row h-10 rounded-2xl w-[300px]">
        <span className="w-[50%] bg-slate-200 rounded-l-3xl"></span>
        <span className="w-[50%] bg-red-700 text-center pt-2 cursor-pointer text-[#FFFFFF] rounded-r-3xl">
          Soumettre
        </span>
      </div>
      <h1 className="text-start text-2xl font-bold">FOLLOW US</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4 ">
          <img src={Facebook} alt="facebook" className="w-[50px] h-[50px] cursor-pointer" />
          <span className="cursor-pointer my-auto ">Facebook</span>
        </div>
        <div className="flex flex-row gap-4 ">
          <a href="https://t.me/Moneygrr" target="_blank">
            <img src={Telegram} alt="telegram" className="w-[50px] h-[50px] cursor-pointer" />
          </a>
          <span className="cursor-pointer my-auto">Telegram</span>
        </div>
      </div>
      <h1 className="text-start text-2xl font-bold">TOP POST</h1>
      <div className="flex flex-row">
        <div className="w-36 h-36">
          <img src={Toppost} alt="toppost" className="bg-cover w-[100%] h-[100%]" />
        </div>
        <div className="flex flex-col gap-2 justify-start w-36 h-36 p-4">
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
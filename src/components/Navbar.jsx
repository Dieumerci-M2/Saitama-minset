import React from 'react'
import { useNavigate } from 'react-router-dom'
import saitama from "../components/img/saitama.png"

function Navbar() {
  const navigate = useNavigate()
    const handlerNavigate = () => {
      navigate("/register")
    }

    const LoginNavigate = useNavigate()
    const handlerLoginNavigate = () => {
      LoginNavigate("/auth")
    }
  return (
    <div>
      <header className="flex flex-row justify-between bg-white border-b-2 border-[gray]-600">
        <div className="border w-[150px] h-[50px] m-2">
          <a href="https://t.me/Moneygrr" target="_blank">
            <img src={saitama} alt="Logo" />
          </a>
        </div>
        <div
          className="flex gap-10
               m-3 cursor-pointer mr-10 font-medium text-lg">
          <span
            onClick={() => {
              handlerNavigate();
            }}
            className="text-[#000000] text-1xl hover:text-blue-400"
            id="inscription">
            Inscription
          </span>
          <span
            onClick={() => {
              handlerLoginNavigate();
            }}
            className="text-[#000000] text-1xl hover:text-blue-400"
            id="connexion">
            Connexion
          </span>
        </div>
      </header>
    </div>
  );
}

export default Navbar
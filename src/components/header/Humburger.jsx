import React from 'react'
import Menus from '../Menus';
// import Reduction from '../assets/reduction.svg';
import Reduction from "../../assets/reduction.svg"

function Humburger() {
    return (
        <header className="flex justify-center flex-col items-center                                                                     tablette:flex tablette:justifiy-center tablette:flex-col tablette:items-center
                                                                      desktop:flex desktop:justify-center desktop:flex-col desktop:items-center
                                                                      ">
            <div className="flex justify-between w-full h-[30px] bg-slate-200
                                                                                    tablette:flex tablette:justifiy-between tablette:w-full
                                                                                    desktop:flex desktop:justify-between desktop:w-full">
                <div className="flex flex-row ml-2 gap-4 tablette:flex tablette:flex-row desktop:flex desktop:flex-row                                                                          ">
                    <span>
                        <img src={Reduction}
                            alt="reduction"
                            className="text-black bg-black cursor-pointer" />
                    </span>
                    <a href="https://git.io/typing-svg">
                        <img src="https://readme-typing-svg.herokuapp.com?font=timenewreman&weight=400&size=23&duration=2500&pause=1000&color=7C3AED&background=8672FF00&width=460&lines=Nos+réductions+vont+jusqu+’à+70%" alt="Typing SVG" className="flex justify-center" />
                    </a>
                </div>
                <div className="flex desktop:flex-row desktop:gap-2">
                    <select name="devise" id="devise" className="bg-gray-200 text-black outline-none cursor-pointer">
                        <option value="1">USD</option>
                        <option value="2">Fc</option>
                    </select>
                    <select name="language" id="language" className="bg-gray-200 text-black outline-none cursor-pointer">
                        <option value="1">French</option>
                        <option value="2">English</option>
                    </select>
                </div>
            </div>
            <Menus />
        </header>
    )
}

export default Humburger

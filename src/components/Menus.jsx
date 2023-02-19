import React from 'react';
import Saitama from '../assets/saitama.png';
import Search from '../assets/Vector.svg';
import Not from '../assets/Vector(1).svg';
import Youtube from '../assets/Vector(2).svg';
import {useNavigate} from 'react-router-dom';
const Menus = () => {
    const router = useNavigate();
    return (
        <>
            <header class="bg-white">
                <div class="container mx-auto px-4 py-8 flex items-center">

                    {/* <!-- logo --> */}
                    <div class="mr-auto tablette:w-48 flex-shrink-0">
                        <img class="h-8 tablette:h-10"
                            src={Saitama}
                            alt=""/>
                    </div>

                    {/* <!-- search --> */}
                    <div class="w-full max-w-xs desktop:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-tablette hidden desktop:flex items-center">
                        <select class="bg-transparent uppercase font-bold text-mobile p-4 mr-4" name="" id="">
                            <option>Catégories</option>
                            <option>Développement personnel
                            </option>
                            <option>Séduction
                            </option>
                            <option>Autres
                            </option>
                        </select>
                        <input class="border-l border-gray-300 bg-transparent font-semibold text-mobile pl-4" type="text" placeholder="Rechercher un livre ..."/>
                        <svg class="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-9x">
                            <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                        </svg>
                    </div>

                    <div className="flex flex-row h-12 w-48 bg-gray-100 my-auto mt-3 mx-8 lg:mx-8 desktop-8
                                  ml-8 lg:ml-8 desktop:ml-16">
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-1 desktop:ml-4 lg:ml-1" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?idesktopib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEytabletted9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div>
                            <span onClick={
                                    () => {
                                        router('/register');
                                    }
                                }
                                className="mr-2 cursor-pointer">
                                Connexion
                            </span>
                            <br/>
                            <span className="mr-2 cursor-pointer">Compte</span>
                        </div>
                    </div>

                    {/* <!-- buttons --> */}
                    {/* <nav class="contents">
                        <ul class="ml-4 desktop:w-48 flex items-center justify-end">
                            <li class="ml-2 lg:ml-4 relative inline-block">
                                <a class="" href="">
                                    <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14 fa-9x">
                                        <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="ml-2 lg:ml-4 relative inline-block">
                                <a class="" href="">
                                    <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-mobile">3</div>
                                    <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-heart fa-w-16 fa-9x">
                                        <path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="ml-2 lg:ml-4 relative inline-block">
                                <a class="" href="">
                                    <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-mobile">12</div>
                                    <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x">
                                        <path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav> */}

                    {/* <!-- cart count --> */}
                    <div class="ml-4 hidden mobile:flex flex-col font-bold">
                        <div className="flex
                                        tablette:flex-row tablette:gap-2 tablette:mt-1
                                        desktop:flex-row desktop:gap-2 desktop:mt-1
                                
                                        ">
                            <span className="max-[3500px]:w-10">
                                <img src={Not}
                                    alt="not"
                                    className="cursor-pointer"/>
                            </span>
                            <span>Notifications</span>
                        </div>
                    </div>
                </div>

                <hr/>
            </header>
            {/* <section className="
                        flex
                        tablette:flex tablette:justify-between tablette:mx-[50px] tablette:flex-row
                        desktop:flex desktop:justify-between desktop:mx-[50px] desktop:flex-row
                    
                    
                        ">
                <div className="
                                        tablette:w-[150px] tablette:h-[50px] tablette:my-3 tablette:mr-10
                                        desktop:w-[150px] desktop:h-[50px] desktop:my-3 desktop:mr-10
                               ">
                    <a href="https://t.me/Moneygrr" target="_blank">
                        <img src={Saitama}
                            alt="logo"
                            className="desktop:mr-8 cursor-pointer"/>
                    </a>
                </div>
                <div className="flex flex-row my-auto rounded-l-desktop h-9 lg:ml-7 x-8 desktop-8
                                tablettte:tablette:flex-row tablette:my-auto tablette:rounded-l-desktop tablette:x-8 tablette:desktop-8 tablette:h-10
                                desktop:flex desktop:flex-row desktop:my- desktop:rounded-l-desktop desktop:desktop-8 x-8:x-8 desktop:h-10
                              ">
                    <input className="placeholder:italic placeholder:text-slate-400 block
                                     bg-gray-100 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-mobile
                                     focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                     mobile:text-mobile rounded-l-desktop" type="text" placeholder="Rechercher un Livre..." placeholder:italic/>
                    <select className="p-2 outline-none focus:border-sky-500 focus:ring-sky-500 max-[3500px]:w-36
                                    max-[1550px]:48">
                        <option>Catégories</option>
                        <option>Développement personnel
                        </option>
                        <option>Séduction
                        </option>
                        <option>Autres...
                        </option>
                    </select>
                    <span className="w-20 h-10 bg-red-700 cursor-pointer">
                        <img src={Search}
                            alt="Search"
                            className="m-auto my-2 text-[#FFFFFF]"/>
                    </span>
                </div>
                <div className="flex flex-row h-12 w-48 bg-gray-100 my-auto mt-3 mx-8 lg:mx-8 desktop-8
                              ml-8 lg:ml-8 desktop:ml-16">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-1 desktop:ml-4 lg:ml-1" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?idesktopib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEytabletted9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <div>
                        <span onClick={
                                () => {
                                    router('/register');
                                }
                            }
                            className="mr-2 cursor-pointer">
                            Connexion
                        </span>
                        <br/>
                        <span className="mr-2 cursor-pointer">Compte</span>
                    </div>
                </div>
                <div className="flex
                              desktop:flex-row desktop:gap-8 desktop:mt-3 desktop:ml-6 desktop:max-[200px]:-mr-4
                              tablette:flex-row tablette:gap-8 tablette:mt-3 tablette:ml-6 tablette:max-[200px]:-mr-4
                              ">
                    <div className="flex
                                    tablette:flex-row tablette:gap-2 tablette:mt-1
                                    desktop:flex-row desktop:gap-2 desktop:mt-1
                            
                                    ">
                        <span className="max-[3500px]:w-10">
                            <img src={Not}
                                alt="not"
                                className="cursor-pointer"/>
                        </span>
                        <span>Notifications</span>
                    </div>
                    <div className="mt-1 desktop:mr-0 max-[3500px]:w-10">
                        <img src={Youtube}
                            alt="youtube"
                            className="cursor-pointer"/>
                    </div>
                </div>
            </section> */}
        </>


    );
};

export default Menus;

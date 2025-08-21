"use client"

import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <nav className="bg-[#282826] sticky w-full z-50 top-0">
                <div className="flex justify-between items-center py-3 px-6 md:px-12 lg:mx-20 top-0">
                    <Link href={'/'} className="logo text-2xl lg:text-3xl text-[#f8f8f8] font-medium">Talal Ahmad</Link>
                    <ul className="hidden md:flex gap-6 lg:gap-10">
                        <li className="hover:scale-[1.025]">
                            <a className="text-sm lg:text-lg text-[#959595] font-normal hover:text-[#f2b713] transition-all ease-in duration-200 linkactive"
                                id="rhome" href="#home">Home</a>
                        </li>
                        <li className="hover:scale-[1.025]">
                            <a className="text-sm lg:text-lg text-[#959595] font-normal hover:text-[#f2b713] transition-all ease-in duration-200"
                                id="rhome" href="#about">About</a>
                        </li>
                        <li className="hover:scale-[1.025]">
                            <a className="text-sm lg:text-lg text-[#959595] font-normal hover:text-[#f2b713] transition-all ease-in duration-200"
                                id="rhome" href="#skills">Skills</a>
                        </li>
                        <li className="hover:scale-[1.025]">
                            <a className="text-sm lg:text-lg text-[#959595] font-normal hover:text-[#f2b713] transition-all ease-in duration-200"
                                id="rhome" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="hover:scale-[1.025]">
                            <a className="text-sm lg:text-lg text-[#959595] font-normal hover:text-[#f2b713] transition-all ease-in duration-200"
                                id="rhome" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <FaBarsStaggered onClick={() => { setDropdown(!dropdown) }} className='block md:hidden text-white text-lg cursor-pointer hover:scale-105 transition hover:text-[#f2b713] duration-150' />

                    {/* Menu Bar */}
                    <div className={`fixed ${dropdown ? "left-0" : "left-[900px]"} md:hidden top-0 w-full h-screen bg-[#282826] text-white z-50 flex flex-col transition-all duration-300 ease-in`}>
                        <div className="flex justify-end p-6">
                            <button onClick={() => { setDropdown(!dropdown) }} className="text-3xl text-[#f2b713] hover:text-gray-300 transition-all duration-300 cursor-pointer hover:scale-105">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col justify-center pl-12">
                            <ul className="flex flex-col gap-8">
                                <li onClick={() => { setDropdown(!dropdown) }} >
                                    <a
                                        href="#home"
                                        className="flex items-center gap-3 text-lg text-gray-300 font-medium px-4 py-2 rounded-lg hover:bg-[#3a3a3a] hover:text-[#f2b713] transition-all duration-300"
                                    >
                                        <FaHome className="text-[#f2b713]" />
                                        Home
                                    </a>
                                </li>
                                <li onClick={() => { setDropdown(!dropdown) }} >
                                    <a
                                        href="#about"
                                        className="flex items-center gap-3 text-lg text-gray-300 font-medium px-4 py-2 rounded-lg hover:bg-[#3a3a3a] hover:text-[#f2b713] transition-all duration-300"
                                    >
                                        <FaUser className="text-[#f2b713]" />
                                        About
                                    </a>
                                </li>
                                <li onClick={() => { setDropdown(!dropdown) }} >
                                    <a
                                        href="#skills"
                                        className="flex items-center gap-3 text-lg text-gray-300 font-medium px-4 py-2 rounded-lg hover:bg-[#3a3a3a] hover:text-[#f2b713] transition-all duration-300"
                                    >
                                        <FaCode className="text-[#f2b713]" />
                                        Skills
                                    </a>
                                </li>
                                <li onClick={() => { setDropdown(!dropdown) }} >
                                    <a
                                        href="#portfolio"
                                        className="flex items-center gap-3 text-lg text-gray-300 font-medium px-4 py-2 rounded-lg hover:bg-[#3a3a3a] hover:text-[#f2b713] transition-all duration-300"
                                    >
                                        <FaBriefcase className="text-[#f2b713]" />
                                        Portfolio
                                    </a>
                                </li>
                                <li onClick={() => { setDropdown(!dropdown) }} >
                                    <a
                                        href="#contact"
                                        className="flex items-center gap-3 text-lg text-gray-300 font-medium px-4 py-2 rounded-lg hover:bg-[#3a3a3a] hover:text-[#f2b713] transition-all duration-300"
                                    >
                                        <FaEnvelope className="text-[#f2b713]" />
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4 px-12 pb-12">
                            <button onClick={() => { setDropdown(!dropdown) }} className="w-1/2 px-4 py-2 rounded-lg border border-[#f2b713] text-[#f2b713] hover:bg-[#f2b713] hover:text-[#282826] font-medium transition-all duration-300">
                                <Link href={'/'}>
                                    Login
                                </Link>
                            </button>
                            <button onClick={() => { setDropdown(!dropdown) }} className="w-1/2 px-4 py-2 rounded-lg bg-[#f2b713] text-[#282826] font-medium hover:bg-transparent hover:text-[#f2b713] hover:border hover:border-[#f2b713] transition-all duration-300">
                                <Link href={'/'}>
                                    Sign Up
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar

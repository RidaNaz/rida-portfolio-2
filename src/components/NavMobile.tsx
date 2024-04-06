"use client"
import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Link from "next/link"

interface Props {
    showNav: boolean,
    closeNav: () => void
}

const NavMobile = ({ closeNav, showNav }: Props) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]"
    return (
        <div>
            <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>
            </div>

            <ul className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-gradient-to-r from-emerald-800 to-gray-900 space-y-14 z-[10006]`}>

                <li><Link className="nav_link text-[25px] sm:text-[30px]" href="#home">Home</Link></li>
                <li><Link className="nav_link text-[25px] sm:text-[30px]" href="#about">About</Link></li>
                <li><Link className="nav_link text-[25px] sm:text-[30px]" href="#services">Services</Link></li>
                <li><Link className="nav_link text-[25px] sm:text-[30px]" href="#projects">Projects</Link></li>
                <li><Link className="nav_link text-[25px] sm:text-[30px]" href="#blog">Blog</Link></li>
                <li><Link className="nav_link text-[25px] sm:text-[30px]" href="#contact">Contact</Link></li>
                <XMarkIcon
                    onClick={closeNav}
                    className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white" />
            </ul>
        </div>
    )
}

export default NavMobile
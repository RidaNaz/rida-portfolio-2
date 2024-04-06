"use client"
import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Props {
    openNav: () => void
}

const Navbar = ({ openNav }: Props) => {

    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true)
            }
            if (window.scrollY <= 90) {
                setNavSticky(false)
            }
        }
        window.addEventListener("scroll", handler)
    }, [])

    const sticktStyle = navSticky ? "bg-gradient-to-l from-emerald-900 to-gray-900 shadow-grey-900 shadow-sm" : ""

    return (
        <div className={`fixed w-[100%] ${sticktStyle} transition-all duration-300 z-[1000]`}>
            <div className="flex items-center h-[12vh] justify-between w-[90%] mr-5 ml-5 lg:mx-auto">
                <div className='flex gap-3'>
                    <Image
                        src="/Ridalogo.svg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text-[40px] text-emerald-500 ">Rn </span>
                        Developer
                    </div>
                </div>
                <ul className="md:flex hidden items-center space-x-10">
                    <li><Link className="nav_link" href="#home">Home</Link></li>
                    <li><Link className="nav_link" href="#about">About</Link></li>
                    <li><Link className="nav_link" href="#services">Services</Link></li>
                    <li><Link className="nav_link" href="#projects">Projects</Link></li>
                    <li><Link className="nav_link" href="#contact">Contact</Link></li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-100" />
            </div>
        </div>
    )
}

export default Navbar
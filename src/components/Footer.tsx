import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black" >
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40" >
                <div>
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text[40px] text-emerald-500">
                            Rn </span>
                        Developer
                    </div>
                    <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam sint quasi ab laboriosam, ad natus.</h1>
                    <p className="mt-[1.3rem] text-emerald-500 font-semibold" >rnaz3414@gmail.com</p>
                </div>

                <div className="md:mx-auto ">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Quick Link</h1>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-emerald-400"><Link href="#about">About</Link></p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-emerald-400"><Link href="#services">Services</Link></p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-emerald-400"><Link href="#projects">Projects</Link></p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-emerald-400"><Link href="#contact">Contact</Link></p>
                </div>
                <div className="lg:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Follow My</h1>

                    <div className="flex items-center mt-[1rem] space-x-2">
                        <RxGithubLogo className="w-[1rem] h-[1rem] text-emerald-500" />
                        <p className="hover:text-emerald-400 text-[17px] font-normal text-white opacity-75" ><Link href="https://github.com/RidaNaz/">GitHub</Link> </p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <RxLinkedinLogo className="w-[1rem] h-[1rem] text-emerald-500" />
                        <p className="hover:text-emerald-400 text-[17px] font-normal text-white opacity-75" ><Link href="https://www.linkedin.com/in/ridanaz67/">LinkedIn</Link> </p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <RxInstagramLogo className="w-[1rem] h-[1rem] text-emerald-500" />
                        <p className="hover:text-emerald-400 text-[17px] font-normal text-white opacity-75" ><Link href="https://www.instagram.com/stories/rida_naz67/">Instagram</Link></p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <FaFacebook className="w-[1rem] h-[1rem] text-emerald-500" />
                        <p className="hover:text-emerald-400 text-[17px] font-normal text-white opacity-75" ><Link href="https://www.facebook.com/profile.php?id=100082363551016">Facebook</Link></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-10 mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
                <Image
                    src="/Ridalogo.svg"
                    alt="logo"
                    width={25}
                    height={25}
                    className="cursor-pointer hover:animate-slowspin"
                />
                &#169; copyright web developer 2024
            </div>
        </div>
    )
}

export default Footer
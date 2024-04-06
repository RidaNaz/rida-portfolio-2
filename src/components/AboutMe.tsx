import React from 'react'
import { CheckIcon } from '@heroicons/react/16/solid'

const AboutMe = () => {
    return (
        <div id="about" className="mt-[-4.1rem] bg-black pb-[3rem]">
            <div className="w-[80%] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                <div>
                    <p className="heading_mini">About Me</p>
                    <h1 className="heading_primary">Professional
                        <span className="text-emerald-600"> Website </span> for your  Bussiness</h1>

                    <p className="text-[15px] mt-[1.3rem] text-white opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere modi officia inventore saepe at pariatur aperiam optio eveniet dicta nihil, harum atque voluptatibus sunt cum ratione laudantium, assumenda voluptate.</p>
                    <div className="mt-[2rem] space-y-3">

                        <div
                            className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-emerald-500" />
                            <p className="text-[18px] text-white" >Frontend Development</p>
                        </div>

                        <div
                            className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-emerald-500" />
                            <p className="text-[18px] text-white" >Backend Development</p>
                        </div>

                        <div
                            className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-emerald-500" />
                            <p className="text-[18px] text-white" >Web Development</p>
                        </div>

                        <div
                            className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-emerald-500" />
                            <p className="text-[18px] text-white" >Mern Development</p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-auto" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]" >

                        <div
                            data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200"
                            className="p-6 text-center bg-gradient-to-tl from-emerald-800 to-gray-900 shadow-grey-900" >
                            <p className="text-[50px] text-white font-bold opacity-80" >2</p>
                            <p className="text-[20px] text-white font-600" >Years Experience</p>
                        </div>
                        <div
                            data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200"
                            className="p-6 text-center bg-gradient-to-tr from-emerald-800 to-gray-900 shadow-grey-900" >
                            <p className="text-[50px] text-white font-bold opacity-80" >200+</p>
                            <p className="text-[20px] text-white font-600" >Happy Clients</p>
                        </div>
                        <div
                            data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400"
                            className="p-6 text-center bg-gradient-to-bl from-emerald-800 to-gray-900 shadow-grey-900" >
                            <p className="text-[50px] text-white font-bold opacity-80" >300+</p>
                            <p className="text-[20px] text-white font-600" >Projects Done</p>
                        </div>
                        <div
                            data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400"
                            className="p-6 text-center bg-gradient-to-br from-emerald-800 to-gray-900 shadow-grey-900" >
                            <p className="text-[50px] text-white font-bold opacity-80" >3+</p>
                            <p className="text-[20px] text-white font-600" >Award Wins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
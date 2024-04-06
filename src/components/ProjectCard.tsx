import React from 'react'
import Image from "next/image"

interface Props {
    title: string
    tech1: string
    tech2: string
    tech3: string
    tech4: string
    image: string
}

const ProjectCard = ({ title, image, tech1, tech2, tech3, tech4 }: Props) => {
    return (
        <div className='grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className='p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md'>
                <Image
                    src={`${image}`}
                    alt={title}
                    width={500}
                    height={500}
                    className='object-contain rounded-xl mx-auto shadow-md'
                />
            </div>
            <div>
                <h1 className='text-[25px] text-white'>{title}</h1>
                <p className='text-white opacity-65 text-[15px] mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a, perspiciatis dolor cupiditate placeat illum, repellendus voluptate delectus quo error recusandae. Aspernatur deleniti quia sed quaerat autem eos, saepe aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nobis! </p>

                <div className='mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>

                    <h1 className='px-6 py-3 bg-emerald-500 text-black rounded-lg text-center'>{tech1}</h1>
                    <h1 className='px-6 py-3 bg-emerald-600 text-white rounded-lg text-center'>{tech2}</h1>
                    <h1 className='px-5 py-3 bg-emerald-500 text-black rounded-lg text-center'>{tech3}</h1>
                    <h1 className='px-3 py-3 bg-emerald-600 text-white rounded-lg text-center'>{tech4}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
import React from 'react'
import Image from "next/image"
import { CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/16/solid'

interface Props {
    title: string
    image: string
    comment: string
    date: string
}

const BlogCard = ({ title, image, comment, date }: Props) => {
    return (
        <div className='bg-gradient-to-br from-emerald-800 to-gray-900'>
            <div>
                <Image
                    src={`${image}`} alt="blog" height={300} width={300}
                    className='object-cover w-[100%] h-[100%]' />
            </div>
            <div className='p-4'>
                <div className='mt-[1rem] mb-[1rem] px-3 py-1 bg-gray-800 w-fit flex items-center space-x-2 rounded-lg'>
                    <CalendarIcon className='w-[1rem] h-[1rem]  text-emerald-500' />
                    <p className='text-white text-[14px] opacity-85'>{date}</p>
                </div>
                <h1 className='text-[20px] opacity-85 hover:text-gray-400 transition-all duration-200 cursor-pointer text-white font-semibold underline'>{title}</h1>
                <div className='flex items-center mt-[2rem] justify-between'>
                    <div className='flex items-center space-x-3'>
                        <ChatBubbleLeftRightIcon className='w-[1.2rem] h-[1.2rem] text-emerald-500' />
                        <p className='text-[15px] text-white opacity-85'>{comment} Comments</p>
                    </div>
                    <div>
                        <button className='text-[15px] hover:text-emerald-700 transition-all duration-150 text-white font-semibold underline'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
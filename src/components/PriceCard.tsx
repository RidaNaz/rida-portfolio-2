import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    plane: string
    price: string
    save: string
    bg: string
}

const PriceCard = ({ plane, price, save, bg }: Props) => {
    return (
        <div className='text-center rounded-lg bg-gray-900'>
            <div className={`p-6 rounded-t-lg ${bg}`}>
                <h1 className='text-white text-[30px]'>{plane}</h1>
                <p className='text-[16px] text-[#d7d7d7]'>Try out {plane} plan save <span className='text-emerald-600'>{save}</span></p>
                <div className='flex justify-center items-end mt-[1rem] space-x-1'>
                    <h1 className='text-[40px] font-bold text-gray-900'>{price}</h1>
                    <p className='text-white'>Hour</p>
                </div>
            </div>
            <div className='p-6'>
                <div className='flex items center space-x-3'>
                    <CheckIcon className='w-[1.4rem] h-[1.4rem] text-emerald-600' />
                    <p className='text-[17px] text-white opacity-80'>Next Js Website</p>
                </div>
                <div className='flex items center space-x-3'>
                    <CheckIcon className='w-[1.4rem] h-[1.4rem] text-emerald-600' />
                    <p className='text-[17px] text-white opacity-80'>React Js Website</p>
                </div>
                <div className='flex items center space-x-3'>
                    <CheckIcon className='w-[1.4rem] h-[1.4rem] text-emerald-600' />
                    <p className='text-[17px] text-white opacity-80'>FullStack Website</p>
                </div>
                <div className='flex items center space-x-3'>
                    <CheckIcon className='w-[1.4rem] h-[1.4rem] text-emerald-600' />
                    <p className='text-[17px] text-white opacity-80'>Authentication Website</p>
                </div>
                <div className='flex items center space-x-3'>
                    <CheckIcon className='w-[1.4rem] h-[1.4rem] text-emerald-600' />
                    <p className='text-[17px] text-white opacity-80'>MERN Website</p>
                </div>
            </div>
            <button className='mt-[1.5rem] px-8 py-4 bg-emerald-700 text-white block w-[100%] hover:bg-emerald-900 transition-all duration-300'>Get Started</button>
        </div>
    )
}

export default PriceCard
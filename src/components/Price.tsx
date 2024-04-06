import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
      <div className='text-center'>
        <p className='heading_mini'>Popular Services</p>
        <h1 className="heading_primary">
          Best <span className='text-emerald-600'>Pricing</span> for your Projects
        </h1>
      </div>
      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]'>
        <PriceCard
          plane="Basic"
          price="10$"
          save="25%"
          bg="bg-yellow-700"
        />
        <PriceCard
          plane="Popular"
          price="20$"
          save="25%"
          bg="bg-red-900"
        />
        <PriceCard
          plane="Premium"
          price="30$"
          save="25%"
          bg="bg-blue-900"
        />
      </div>
    </div>
  )
}

export default Price
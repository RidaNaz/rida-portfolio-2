import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div id="services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
        <div className="text-center">
            <p className="heading_mini">Popular Services</p>
            <h1 className="heading_primary">My Special <span className="text-emerald-600">Services</span> For You</h1>
        </div>
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <ServicesCard title="React.js Website" num="01"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServicesCard title="Next.js Website" num="02"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <ServicesCard title="Fullstack Website" num="03"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServicesCard title="Node Js API" num="04"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <ServicesCard title="MERN WebApp" num="05"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <ServicesCard title="Bug Fixing" num="06"/>
            </div>
        </div>
    </div>
  )
}


export default Services
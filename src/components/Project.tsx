import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div id="projects" className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='text-center'>
                <p className='heading_mini'> Recent Works</p>
                <h1 className='heading_primary'>
                    My Best <span className='text-emerald-600'>Projets</span>
                </h1>
            </div>
            <ProjectCard
                title="E-commerce Website"
                tech1="React"
                tech2="Next Js"
                tech3="Tailwind"
                tech4="TypeScript"
                image="/p1.png"
            />
            <ProjectCard
                title="Portfolio Website"
                tech1="React"
                tech2="Next Js"
                tech3="Tailwind"
                tech4="TypeScript"
                image="/p2.png"
            />
            <ProjectCard
                title="FullStack Food Delivery WebApp"
                tech1="React"
                tech2="Next Js"
                tech3="Node Js"
                tech4="MongoDB"
                image="/p4.png"
            />
            <ProjectCard
                title="Travel Website"
                tech1="React"
                tech2="Next Js"
                tech3="Tailwind"
                tech4="TypeScript"
                image="/p3.png"
            />
        </div>
    )
}

export default Project
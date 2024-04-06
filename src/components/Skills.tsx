import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div id="skills" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items center">
        <div className="col-span-3">
          <p className="heading_mini">My Skills</p>
          <h1 className="heading_primary">Let&apos;s Explore Popular <span className="text-emerald-600">Skills </span>& Experience</h1>
          <p className='text-[15px] mb-[1.5rem] text-white opacity-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, aperiam ad. Debitis deleniti eos, perferendis dolorum minima recusandae a unde rem nemo, fugit ipsam repellat aliquid adipisci hic tempore accusamus?Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-700 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-emerald-700 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className='col-span-4'>
          <div className='grid grid-cols-1 sm:grid-grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-[1rem] items-center'>

          <div data-aos="flip-left" data-aos-anchor-placement=" top-center" data-aos-delay="200">
              <SkillCard
              title="HTML"
              image="/html.svg"
              percent="95%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement=" top-center" data-aos-delay="400">
              <SkillCard
              title="CSS"
              image="/css.svg"
              percent="85%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement=" top-center" data-aos-delay="600" >
              <SkillCard
              title="JavaScript"
              image="/js.svg"
              percent="80%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
              <SkillCard
              title="TypeScript"
              image="/ts.svg"
              percent="90%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
              <SkillCard
              title="Node Js"
              image="/node.svg"
              percent="95%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
              <SkillCard
              title="React"
              image="/react.svg"
              percent="75%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement=" top-center" data-aos-delay="1400">
              <SkillCard
              title="Next.js"
              image="/nextjs.svg"
              percent="80%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
              <SkillCard
              title="MongoDB"
              image="/mongo.svg"
              percent="50%"
              />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
              <SkillCard
              title="Python"
              image="/python.svg"
              percent="55%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
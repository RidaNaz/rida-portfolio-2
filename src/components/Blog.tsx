import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div id="blog" className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='text-center'>
                <p className='heading_mini'>My Blog</p>
                <h1 className='heading_primary'>My Latest <span className='text-emerald-600'>Blog</span> and News</h1>
            </div>
            <div className='w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ites-center gap-[2rem]'>
                <div data-aos="zoom-in" data-aos-anchor-placement=" top-bottom">
                    <BlogCard
                        title="Fullsatck Developer Roadmap"
                        comment="4"
                        date="24 January 2024"
                        image="/b1.jpg" />
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement=" top-bottom" data-aos-delay="200">
                    <BlogCard
                        title="Starting with React"
                        comment="8"
                        date="26 January 2024"
                        image="/b2.jpg" />
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement=" top-" data-aos-delay="400">
                    <BlogCard
                        title="Time Management iN Tech Job"
                        comment="4"
                        date="29 January 2024"
                        image="/b3.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Blog
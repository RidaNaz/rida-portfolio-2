import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
                <div>
                    <p className='heading_mini'>Get in Touch</p>
                    <h1 className="heading_primary">
                        Lets make your <span className='text-emerald-600'>Brand </span> brilliant
                    </h1>
                    <p className='text-[15px] text-white mt-[1rem] opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti quibusdam tenetur repellat possimus molestias nihil mollitia rem debitis. Harum, perferendis ipsa? Corporis, nostrum distinctio. Enim, voluptatibus aspernatur. Consequuntur, minima?</p>
                    <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-emerald-600 underline font-bold'>+92 311 222333</h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                        <input
                            type="text"
                            placeholder='Name'
                            className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' />

                        <input
                            type="email"
                            placeholder='Email'
                            className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' />

                    </div>
                    <input
                        type="text"
                        placeholder='Subject' className='py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4 mb-[1.5rem]' />
                    <textarea placeholder="Message" rows={4} className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 px-4 rounded-md' ></textarea>

                    <button className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-emerald-800 px-4 rounded-md hover:bg-emerald-900'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
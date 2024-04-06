import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Graphics Designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Digital Marketer',
        1000,
        'Frontend Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className= "xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white"
      repeat={Infinity}
    />
  )
}

export default TypeWriteEffect
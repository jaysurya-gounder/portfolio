import React from 'react'
import AnimatedComponent from './AnimatedComponent'

function About({scrollToSection}) {
  return (
    <AnimatedComponent>
      <div className='w-full h-screen flex justify-center items-center bg-[rgb(27_27_27)] max-md:h-fit max-md:items-start max-md:py-24'>
        <div className='w-[85%] h-[300px] flex max-md:w-[90%] max-md:h-fit max-md:flex-col'>
          <div className='w-[70%] h-full ps-20 flex flex-col justify-center text-7xl font-bold text-white max-md:w-full max-md:h-fit max-md:ps-0 max-md:text-5xl'>
            <div data-aos="fade-right"
              data-aos-duration="2000">Creative </div>
            <div data-aos="fade-right"
              data-aos-duration="2400" className='text-red-600'>Front-End</div>
            <div data-aos="fade-right"
              data-aos-duration="2800">Web Developer. </div>
          </div>
          <div className='w-[30%] h-full max-md:w-full'>
            <div className='w-fit h-fit mb-8 px-5 py-2 text-sm text-white rounded-full bg-[rgb(50_50_50)] max-md:my-10 max-md:text-base'
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              I'm Fresher </div>
            <div className='w-11/12 h-fit mb-8 text-gray-200 text-lg max-md:w-full'
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Hello, I'm a <span className='font-bold text-red-600'> Front-End Web Developer</span>,
              and I'm very passionate and dedicated to my work.
              I have completed my <span className='font-bold text-red-600'>Bachelor of Engineering in Information Technology</span>.
              Seeking a beginner role to enhance and explore my technical knowledge,
              I have acquired the skills and knowledge necessary to make your project a success.
            </div>
            <div className='w-fit h-fit'
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <button onClick={() => scrollToSection('contact')} className='w-36 h-12 border-[1px] border-white rounded-full font-medium text-white max-md:mt-10 hover:bg-white hover:text-black' >Hire me</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedComponent>
  )
}

export default About
import React from 'react'
import AnimatedComponent from './AnimatedComponent'

function Resume() {
    return (
        <AnimatedComponent>
            <div className='w-full h-screen flex justify-center items-center bg-[rgb(29,29,29)] max-md:h-fit max-md:py-24'>
                <div className='container w-[85%] h-full flex max-md:w-[90%] max-md:flex-col'>
                    <div className='w-1/2 h-full max-md:w-full'>
                        <div className='w-full h-1/2 flex flex-col justify-center max-md:h-fit max-md:justify-start max-md:mb-10'>
                            <div 
                            className='w-fit h-fit my-5 px-8 py-2 text-sm font-semibold text-white border-[1px] border-[rbg(50,50,50)] rounded-full'
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            >SKILLS AND INTERNSHIPS</div>
                            <div 
                            className='w-fit h-fit text-6xl font-bold text-white max-md:text-4xl'
                            data-aos="flip-down"
                            data-aos-duration="1000"
                            >My Experience</div>
                        </div>
                        <div className='w-full h-1/2 max-md:h-fit'>
                            <div className='w-full h-full grid grid-rows-1 grid-flow-col gap-5 max-md:grid-cols-3 max-md:grid-flow-row'>
                                <div data-aos="fade-right" data-aos-duration="1900" data-aos-easing="ease-in-sine" className='w-28 h-48 text-sm font-medium text-white border-[1px] rounded-full md:mix-blend-luminosity flex flex-col justify-center items-center hover:mix-blend-normal cursor-pointer'>
                                    <div className='w-16 h-16 mb-2 bg-html bg-cover'></div>
                                    <div className=''>HTML & CSS</div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="1600" data-aos-easing="ease-in-sine" className='w-28 h-48 text-sm font-medium text-white border-[1px] rounded-full md:mix-blend-luminosity flex flex-col justify-center items-center hover:mix-blend-normal cursor-pointer'>
                                    <div className='w-16 h-16 mb-2 bg-javascript bg-cover'></div>
                                    <div className=''>Javascript</div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="1300" data-aos-easing="ease-in-sine" className='w-28 h-48 text-sm font-medium text-white border-[1px] rounded-full md:mix-blend-luminosity flex flex-col justify-center items-center hover:mix-blend-normal cursor-pointer'>
                                    <div className='w-16 h-16 mb-2 bg-react bg-cover'></div>
                                    <div className=''>ReactJs</div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='w-28 h-48 text-sm font-medium text-white border-[1px] rounded-full md:mix-blend-luminosity flex flex-col justify-center items-center hover:mix-blend-normal cursor-pointer'>
                                    <div className='w-16 h-16 mb-2 bg-tailwind bg-cover'></div>
                                    <div className=''>Tailwind</div>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine" className='w-28 h-48 text-sm font-medium text-white border-[1px] rounded-full md:mix-blend-luminosity flex flex-col justify-center items-center hover:mix-blend-normal cursor-pointer'>
                                    <div className='w-16 h-16 mb-2 bg-redux bg-cover'></div>
                                    <div className=''>Redux</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-full max-md:w-full max-md:mt-20'>
                        <div className='w-full h-full flex flex-col justify-center items-end max-md:items-center'>
                            <div data-aos="fade-left" data-aos-duration="700" className='w-[85%] h-36 border-t-[1px] flex justify-between items-center max-md:w-full'>
                                <div className='w-fit h-fit'>
                                    <div className='w-fit h-fit mb-3 text-white text-xl font-semibold'>Tops Technologies</div>
                                    <div className='w-fit h-fit text-white text-sm '>Front-end Developer</div>
                                </div>
                                <div className='w-fit h-fit flex flex-col items-end'>
                                    <div className='w-4 h-4 mb-1 bg-arrow bg-cover'></div>
                                    <div className='w-fit h-fit text-white text-sm'>2023 - 2024</div>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="700" className='w-[85%] h-36 border-y-[1px] flex justify-between items-center max-md:w-full'>
                                <div className='w-fit h-fit'>
                                    <div className='w-fit h-fit mb-3 text-white text-xl font-semibold'>Codecycle Technologies</div>
                                    <div className='w-fit h-fit text-white text-sm '>Backend Developer</div>
                                </div>
                                <div className='w-fit h-fit flex flex-col items-end'>
                                    <div className='w-4 h-4 mb-1  bg-arrow bg-cover'></div>
                                    <div className='w-fit h-fit text-white text-sm'>2022 - 2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default Resume
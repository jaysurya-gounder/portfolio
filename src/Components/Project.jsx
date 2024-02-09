import React from 'react'
import AnimatedComponent from './AnimatedComponent'

const Project = () => {
    return (
        <AnimatedComponent>
            <div className='w-full h-fit py-24 flex justify-center items-center bg-[rgb(29,29,29)]'>
                <div className='w-[85%] h-fit max-md:w-[90%]'>
                    <div className='w-full h-fit mb-20 flex justify-between items-center max-md:flex-col max-md:items-start max-md:mb-12'>
                        <div className='w-fit h-fit'>
                            <div
                                className='w-fit h-fit my-5 px-8 py-2 text-sm font-semibold text-white border-[1px] border-[rbg(50,50,50)] rounded-full'
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >MY PROJECTS</div>
                            <div
                                className='w-fit h-fit text-6xl font-bold text-white max-md:text-4xl'
                                data-aos="flip-down"
                                data-aos-duration="1000"
                            >Selected Works</div>
                        </div>
                        <a href='https://github.com/jaysurya-gounder' target="_blank" rel="noopener noreferrer" className='w-44 h-12 relative cursor-pointer max-md:mt-8'>
                            <div className='w-fit h-full leading-3 flex text-white absolute top-4 left-5'>
                                <div>View My GitHub</div>
                                <div className='w-4 h-4 ml-1 bg-arrow bg-cover'></div>
                            </div>
                            <div className='w-12 h-12 rounded-full bg-[rgb(50_50_50)]'></div>
                        </a>
                    </div>
                    <div className='w-full h-fit grid grid-cols-2 gap-10 mb-5 max-md:grid-cols-1'>
                        <div className='h-fit'>
                            <div className='w-full h-96 rounded-xl'>
                                <img data-aos="fade-right" data-aos-duration='2000' className='w-full h-full rounded-xl' src='/images/fashionhub.jpg' />
                            </div>
                            <div className='w-full h-10 justify-between items-center flex text-white my-3'>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-2xl font-semibold max-md:text-xl'>Fashion Hub (Shopify Web App)</div>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-base'>© 2024</div>
                            </div>
                        </div>
                        <div className='h-fit'>
                            <div className='w-full h-96 rounded-xl'>
                                <img data-aos="fade-left" data-aos-duration='2000' className='w-full h-full rounded-xl' src='/images/snapify.jpg' />
                            </div>
                            <div className='w-full h-10 justify-between items-center flex text-white my-3'>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-2xl font-semibold max-md:text-xl'>Snapify (Social Media App)</div>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-base'>© 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit grid grid-cols-3 gap-10 max-md:grid-cols-1'>
                        <div className='h-fit'>
                            <div className='w-full h-96 rounded-xl'>
                                <img data-aos="fade-right" data-aos-duration='2000' className='w-full h-full rounded-xl' src='/images/handloom.jpg' />
                            </div>
                            <div className='w-full h-10 justify-between items-center flex text-white my-3'>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-2xl font-semibold max-md:text-xl'>Handloom (Shopify Web App)</div>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-base'>© 2023</div>
                            </div>
                        </div>
                        <div className='h-fit'>
                            <div className='w-full h-96 rounded-xl'>
                                <img data-aos="zoom-in" data-aos-duration='3000' className='w-full h-full rounded-xl' src='/images/photo2.jpg' />
                            </div>
                            <div className='w-full h-10 justify-between items-center flex text-white my-3'>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-2xl font-semibold max-md:text-xl'>GeekFolio Architecture</div>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-base'>© 2023</div>
                            </div>
                        </div>
                        <div className='h-fit'>
                            <div className='w-full h-96 rounded-xl'>
                                <img data-aos="fade-left" data-aos-duration='2000' className='w-full h-full rounded-xl' src='/images/photo2.jpg' />
                            </div>
                            <div className='w-full h-10 justify-between items-center flex text-white my-3'>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-2xl font-semibold max-md:text-xl'>GeekFolio Architecture</div>
                                <div data-aos="zoom-out" data-aos-duration='2000' className='w-fit h-fit text-base'>© 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default Project

import React from 'react'
import AnimatedComponent from './AnimatedComponent'

      function Services({scrollToSection}) {
    return (
        <AnimatedComponent>
            <div className='w-full h-fit py-24 flex justify-center items-center bg-[rgb(27,27,27)]'>
                <div className='w-[85%] h-fit max-md:w-[90%]'>
                    <div className='w-full h-fit mb-20 flex justify-between items-center max-md:flex-col max-md:items-start max-md:mb-12'>
                        <div className='w-fit h-fit'>
                            <div 
                            className='w-fit h-fit my-5 px-8 py-2 text-sm font-semibold text-white border-[1px] border-[rbg(50,50,50)] rounded-full'
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            >FEATURED SERVICES</div>
                            <div 
                            className='w-fit h-fit text-6xl font-bold text-white max-md:text-4xl'
                            data-aos="flip-down"
                            data-aos-duration="1000"
                            >My Services</div>
                        </div>
                        <div onClick={() => scrollToSection('project')} className='w-44 h-12 relative cursor-pointer max-md:mt-8'>
                            <div className='w-fit h-full leading-3 flex text-white absolute top-4 left-5'>
                                <div>View All Projects</div>
                                <div className='w-4 h-4 ml-1 bg-arrow bg-cover'></div>
                            </div>
                            <div className='w-12 h-12 rounded-full bg-[rgb(50_50_50)]'></div>
                        </div>
                    </div>
                    <div className='w-full h-fit grid grid-rows-3 grid-flow-col gap-5 max-md:grid-cols-1 max-md:grid-flow-row'>
                        <div data-aos="fade-up" data-aos-duration='1000' className='h-64 flex border-[1px] border-[rgb(50_50_50)] rounded-lg max-md:h-80 max-md:py-3 max-md:flex-col max-md:items-center'>
                            <div className='w-[30%] h-full flex justify-center items-center max-md:w-[40%] max-md:self-start max-md:justify-start max-md:ps-4'>
                                <img src='/images/0.png' className='w-24 h-24 max-md:w-20 max-md:h-20' />
                            </div>
                            <div className='w-[70%] h-full flex flex-col justify-center max-md:w-[90%]'>
                                <div className='w-[75%] h-fit mb-5 text-white text-2xl font-medium max-md:w-full max-md:text-xl'>React.js Application Development </div>
                                <div className='w-[95%] h-fit mb-5 text-gray-200 text-lg max-md:w-full max-md:text-md' >Building custom web applications using React.js to create dynamic and responsive user interfaces. </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1000' className='h-64 flex border-[1px] border-[rgb(50_50_50)] rounded-lg max-md:h-80 max-md:py-3 max-md:flex-col max-md:items-center'>
                            <div className='w-[30%] h-full flex justify-center items-center max-md:w-[40%] max-md:self-start max-md:justify-start max-md:ps-4'>
                                <img src='/images/0.png' className='w-24 h-24 max-md:w-20 max-md:h-20' />
                            </div>
                            <div className='w-[70%] h-full flex flex-col justify-center max-md:w-[90%]'>
                                <div className='w-[75%] h-fit mb-5 text-white text-2xl font-medium max-md:w-full max-md:text-xl'>Responsive Web Design </div>
                                <div className='w-[95%] h-fit mb-5 text-gray-200 text-lg max-md:w-full max-md:text-md' >Ensuring that applications are responsive and work well on various devices and screen sizes. </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1000' className='h-64 flex border-[1px] border-[rgb(50_50_50)] rounded-lg max-md:h-80 max-md:py-3 max-md:flex-col max-md:items-center'>
                            <div className='w-[30%] h-full flex justify-center items-center max-md:w-[40%] max-md:self-start max-md:justify-start max-md:ps-4'>
                                <img src='/images/0.png' className='w-24 h-24 max-md:w-20 max-md:h-20' />
                            </div>
                            <div className='w-[70%] h-full flex flex-col justify-center max-md:w-[90%]'>
                                <div className='w-[75%] h-fit mb-5 text-white text-2xl font-medium max-md:w-full max-md:text-xl'>UI/UX Design Integration </div>
                                <div className='w-[95%] h-fit mb-5 text-gray-200 text-lg max-md:w-full max-md:text-md' >Integrating React components with UI/UX designs to create visually appealing and user-friendly interfaces. </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1000' className='h-64 flex border-[1px] border-[rgb(50_50_50)] rounded-lg max-md:h-80 max-md:py-3 max-md:flex-col max-md:items-center'>
                            <div className='w-[30%] h-full flex justify-center items-center max-md:w-[40%] max-md:self-start max-md:justify-start max-md:ps-4'>
                                <img src='/images/1.png' className='w-24 h-24 max-md:w-20 max-md:h-20' />
                            </div>
                            <div className='w-[70%] h-full flex flex-col justify-center max-md:w-[90%]'>
                                <div className='w-[75%] h-fit mb-5 text-white text-2xl font-medium max-md:w-full max-md:text-xl'>Component Development </div>
                                <div className='w-[95%] h-fit mb-5 text-gray-200 text-lg max-md:w-full max-md:text-md' >Designing and developing reusable React components that can be used across different parts of an application. </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1000' className='h-64 flex border-[1px] border-[rgb(50_50_50)] rounded-lg max-md:h-80 max-md:py-3 max-md:flex-col max-md:items-center'>
                            <div className='w-[30%] h-full flex justify-center items-center max-md:w-[40%] max-md:self-start max-md:justify-start max-md:ps-4'>
                                <img src='/images/1.png' className='w-24 h-24 max-md:w-20 max-md:h-20' />
                            </div>
                            <div className='w-[70%] h-full flex flex-col justify-center max-md:w-[90%]'>
                                <div className='w-[75%] h-fit mb-5 text-white text-2xl font-medium max-md:w-full max-md:text-xl'>State Management </div>
                                <div className='w-[95%] h-fit mb-5 text-gray-200 text-lg max-md:w-full max-md:text-md' >Implementing state management solutions such as Redux or Context API to manage the state of the application efficiently. </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1000' className='h-64 flex border-[1px] border-[rgb(50_50_50)] rounded-lg max-md:h-80 max-md:py-3 max-md:flex-col max-md:items-center'>
                            <div className='w-[30%] h-full flex justify-center items-center max-md:w-[40%] max-md:self-start max-md:justify-start max-md:ps-4'>
                                <img src='/images/1.png' className='w-24 h-24 max-md:w-20 max-md:h-20' />
                            </div>
                            <div className='w-[70%] h-full flex flex-col justify-center max-md:w-[90%]'>
                                <div className='w-[75%] h-fit mb-5 text-white text-2xl font-medium max-md:w-full max-md:text-xl'>API Integration</div>
                                <div className='w-[95%] h-fit mb-5 text-gray-200 text-lg max-md:w-full max-md:text-md' >Integrating with backend APIs and services to fetch and update data in real-time. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default Services
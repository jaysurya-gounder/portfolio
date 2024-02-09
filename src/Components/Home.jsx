import React, { useEffect } from 'react'
import 'boxicons'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({
        });
    }, []);

    const downloadFile = () => {
        const filename = 'Jaysurya Resume React js .pdf';
        const url = process.env.PUBLIC_URL + '/data/' + filename;
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    return (
        <div className='w-full h-screen relative bg-[rgb(29_29_29)] max-md:h-[800px]'>
            <div className='relative w-[70%] h-full m-auto z-20 max-md:w-[90%] max-md:h-[470px] max-md:pt-36'>
                <div className='w-3/5 h-full flex flex-col justify-center max-md:w-full'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='text-4xl mb-2 font-light  text-white max-md:text-xl '>FRONT-END WEB DEVELOPER</div>
                    <div data-aos="fade-right" data-aos-duration="2000" className='text-8xl mb-20 font-medium text-white max-md:text-6xl max-md:mb-12'>JAYSURYA GOUNDER</div>
                    <p data-aos="zoom-out" data-aos-duration="3000" className='w-2/5 h-fit ps-10 text-lg text-white border-l-2 border-white max-md:text-base max-md:w-11/12 max-md:ps-5'>
                        I'm Front-End Developer based from Ahmedabad, Gujarat and I'm very passionate and dedicated to my work.
                    </p>
                </div>
                <div onClick={downloadFile} className='absolute download-btn'>
                    <box-icon name='download' color='#ffffff' size='md' />
                    <p className='text-lg font-medium'>RESUME</p>
                </div>
            </div>
            <div className='absolute md:hidden w-full h-full z-10 bg-[rgb(29_29_29)] opacity-70 right-0 top-0' ></div>
            <img className='absolute object-cover md:hidden w-full h-full z-10 bg-[rgb(29_29_29)]  opacity-40 right-0 top-0' src='/public/images/photo2.jpg' />
            <img data-aos="zoom-in" data-aos-duration="5000" className='absolute w-[35%] h-fit right-[10%] top-3 max-md:hidden' src='/public/images/main.png' />
            <div data-aos="fade-left" data-aos-duration="2000" className='absolute z-10 flex flex-col gap-5 top-[35%] end-3 max-md:flex-row max-md:flex-wrap max-md:h-fit max-md:top-[460px] max-md:start-5'>
                <a href='https://github.com/jaysurya-gounder' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon type='logo' name='github' animation='tada' size='30px' /></a>
                <a href='https://www.instagram.com/suryashivkumar_' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon type='logo' name='instagram' animation='tada' size='30px' /></a>
                <a href='https://www.facebook.com/Suryakumar832' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon name='facebook' type='logo' animation='tada' size='30px' /></a>
                <a href='https://www.linkedin.com/in/jaysurya-gounder-59248b244' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon type='logo' name='linkedin' animation='tada' size='30px' /></a>
            </div>
        </div>
    )
}

export default Home

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [visible, setVisible] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        const data = {
            from_name: name,
            reply_to: email,
            from_email: email,
            subject: subject,
            message: message,
        }
        emailjs
            .send('service_8ihqy1k', 'template_prq994u', data,
                {
                    publicKey: 'Y9QBixeQPuQ2obUTB',
                })
            .then(
                () => {
                    setSuccess(true);
                    setVisible(true)

                },
                () => {
                    setSuccess(false);
                    setVisible(true);
                },
            );
        setTimeout(() => {
            setVisible(false)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }, 5000)

    };
    return (
        <div className='w-full h-fit py-20 flex justify-center items-center bg-[rgb(27,27,27)] max-md:h-fit'>
            <div className='container w-[85%] h-full flex justify-center items-baseline max-md:w-[90%] max-md:flex-col'>
                <div className='w-1/2 h-full text-white max-md:w-full'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='w-fit h-fit my-5 px-8 py-2 text-sm font-semibold text-white border-[1px] border-[rbg(50,50,50)] rounded-full'>GET IN TOUCH</div>
                    <div data-aos="flip-down" data-aos-duration="1000" className='text-7xl my-3 font-medium max-md:text-4xl max-md:font-bold'>Let's make your brand brilliant!</div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='w-4/5 h-fit my-8 max-md:w-full max-md:my-4'>If you would like to work with us or just want to get in touch, we’d love to hear from you!</div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='w-4/5 h-fit my-14 text-4xl underline max-md:text-3xl max-md:font-medium max-md:my-10'>+91 8320670510</div>
                    <div className='w-1/2 h-fit flex justify-between items-center max-md:w-2/3 max-md:mb-10'>
                        <a href='https://github.com/jaysurya-gounder' target="_blank" rel="noopener noreferrer" data-aos="fade-right" data-aos-duration="1600" data-aos-easing="ease-in-sine" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon type='logo' name='github' size='30px' animation='tada' /></a>
                        <a href='https://www.instagram.com/suryashivkumar_' target="_blank" rel="noopener noreferrer" data-aos="fade-right" data-aos-duration="1300" data-aos-easing="ease-in-sine" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon name='instagram' type='logo' size='30px' animation='tada' /></a>
                        <a href='https://www.facebook.com/Suryakumar832' target="_blank" rel="noopener noreferrer" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon name='facebook' type='logo' size='30px' animation='tada' /></a>
                        <a href='https://www.linkedin.com/in/jaysurya-gounder-59248b244' target="_blank" rel="noopener noreferrer" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine" className='w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer transition-transform hover:scale-125'><box-icon type='logo' name='linkedin' size='30px' animation='tada' /></a>
                    </div>
                </div>
                <form data-aos="fade-left"
                    onSubmit={sendEmail}
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    className='w-1/2 h-full flex flex-col justify-center items-center max-md:w-full'>
                    <div className='w-full h-fit mb-8 flex justify-between max-md:flex-col max-md:mb-5'>
                        <input
                            onChange={(e) => { setName(e.target.value) }}
                            className='w-[50%] h-14 p-4 text-white font-medium mr-10 border-[1px] border-[rgb(50_50_50)] rounded-lg bg-transparent placeholder-gray-200 placeholder-opacity-30 max-md:w-full max-md:mb-5'
                            value={name}
                            type='text'
                            placeholder='Name'
                            name="user_name" />
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            className='w-[50%] h-14 p-4 text-white font-medium border-[1px] border-[rgb(50_50_50)] rounded-lg bg-transparent placeholder-gray-200 placeholder-opacity-30 max-md:w-full'
                            value={email}
                            type='email'
                            placeholder='Email'
                            name="user_email" />
                    </div>
                    <input className='w-full h-14 mb-8 p-4 text-white font-medium border-[1px] border-[rgb(50_50_50)] rounded-lg bg-transparent placeholder-gray-200 placeholder-opacity-30 max-md:mb-5'
                        onChange={(e) => { setSubject(e.target.value) }}
                        value={subject}
                        type='text'
                        placeholder='Subject'
                        name="subject" />
                    <textarea
                        onChange={(e) => { setMessage(e.target.value) }}
                        className='w-full h-60 mb-8 p-4 text-white font-medium border-[1px] border-[rgb(50_50_50)] rounded-lg bg-transparent placeholder-gray-200 placeholder-opacity-30 max-md:mb-5'
                        value={message}
                        placeholder='Message'
                        name="message" />
                    <button className='w-full h-14 border-[1px] border-white rounded-full font-medium text-white max-md:w-full hover:bg-white hover:text-black'
                        type='submit'
                        value="Send">
                        Let's Talk
                    </button>
                    <div className={visible ? "visible" : "invisible"}>
                        {
                            success ?
                                <div className='w-fit h-8 flex gap-1 items-center text-lg mt-5 font-medium text-green-800 max-md:text-base'><box-icon name='check-circle' color='#166534' /><span>Thank you, Your message successfully sent</span></div> :
                                <div className='w-fit h-8 flex gap-1 items-center text-lg mt-5 font-medium text-red-800 max-md:text-base'><box-icon name='x-circle' color='#991b1b' /> <span>Failed to send, Please send again</span> </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
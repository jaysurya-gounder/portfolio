import React from 'react'

function Footer() {
    return (
        <div className='w-full h-24 border-t-[1px] border-[rgb(50_50_50)] bg-[rgb(29,29,29)]'>
            <div className="w-[85%] h-full m-auto flex items-center max-md:w-[90%] max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-2">
                <h1 className='w-1/3 h-fit text-3xl font-medium text-white max-md:w-full max-md:text-2xl'>Jaysurya Gounder</h1>
                <div className='w-2/3 h-fit text-right text-white max-md:w-full max-md:text-start max-md:text-sm'>
                    © 2024 Jaysurya gounder. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
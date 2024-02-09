import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-screen bg-[rgb(27_27_27)] grid place-content-center'>
            <div className='text-3xl tracking-[30px] text-white max-md:text-2xl max-md:ps-5 max-md:tracking-[20px] loader'></div>
        </div>
    )
}

export default Loading
import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] lg:mt-15  mt-72 lg:mt-0pt-5 text-center '>
            <div className='lg:text-[8vw] text-[10vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Opportunities
            </div>
            <div className='lg:text-[8vw] text-[10vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                For
                <div className='h-[7vw] w-[14vw]  rounded-full -mt-0.5 overflow-hidden '>
                   <Video/>
                </div>
                Every
            </div>
            <div className='lg:text-[8vw] text-[10vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Professional
            </div>
        </div>
    )
}

export default HomeHeroText
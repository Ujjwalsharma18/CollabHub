import React, { useRef } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {


  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>

      {/* unused svg  */}
      {/* <svg viewBox="0 0 413.7124938964844 63.97500228881836" style="translate: none; rotate: none; scale: none; transform: scale(-1, 1);">
              <ellipse cx="206.8562469482422" cy="31.98750114440918" rx="204.8562469482422" ry="29.98750114440918" style="stroke-dashoffset: -1473.69; stroke-dasharray: 107.017px, 736.946px;"></ellipse>
            </svg> */}
    </div>
  )
}

export default Home
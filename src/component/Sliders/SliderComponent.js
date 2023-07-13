import React from 'react'
import { Link } from 'react-router-dom';

const SliderComponent = ({ details }) => {
    return (
        <div className=' bg-[#f2f146] mx-4 rounded-lg spider_slider'>
            <div className='px-2 py-6 text-center text-black'>
                <img src={details.cover_image} alt="img_spidy" className='w-[auto] h-[200px] object-contain mx-auto' />
                <div className='pt-6 text-2xl'>{details.name}</div>
                <Link to={'variation/' + details.link} className=' inline-block px-2 py-2 mt-4 rounded-sm about_btn transition-all ease-linear'>See About Me</Link>
            </div>
        </div>
    )
}

export default SliderComponent
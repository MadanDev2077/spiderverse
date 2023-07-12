import React from 'react'
import introspidy from '../../assets/images/introspider.png';

const Intro = () => {
    return (
        <div className='bg-[#272727] intro_wrap'>
            <div className='common_container'>
                <div className=' md:grid md:grid-cols-2 md:items-center gap-x-5'>
                    <div className='text-white text-md md:text-xl tracking-[1px] '>
                        <p>Welcome to the captivating world of the Spider-Man Universe! Prepare to be enthralled as you dive headfirst into the extraordinary adventures of everyone's favorite web-slinging superhero. </p>
                        <p className='pt-3 md:pt-6'>Our website is your ultimate destination to explore the rich tapestry of Spider-Man's journey, from the comic book pages to the silver screen, and beyond.</p>
                    </div>
                    <div className=' intro_img_par relative  mt-10 md:mt-0'>
                        <img src={introspidy} alt="spidy" className='img_bounce relative z-10' />
                        <span className='intro_shadow'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from './SliderComponent';
import { spiderData } from '../database/database';

const Sliders = () => {

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2300 ,
        prevArrow: <></>,
        nextArrow: <></>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className='bg-[#0a2b4e]'>
            <div className='common_container text-white'>
                <Slider {...carouselSettings}>
                    {
                        spiderData?.map((item) => <SliderComponent details={item} />)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Sliders
import React, { useState } from 'react'
import logo from '../../assets/images/symbol.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import NavBar from './NavBar';
const Header = () => {
    const [openNavBar, setOpenNavBar] = useState(false)
    return (
        <div className='bg-[#ae1622] text-white'>
            <div className='container px-8 py-5 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='w-[35px] md:w-[45px] cursor-pointer'>
                        <img src={logo} alt="logo" className='hover:rotate-180 transition-all duration-100 ease-linear' />
                    </div>
                    <NavBar classes="hidden gap-8 sm:flex sys_navbar" />
                    <span className='sm:hidden cursor-pointer' onClick={() => setOpenNavBar(true)}>
                        <RxHamburgerMenu size={24} />
                    </span>
                </div>
            </div>
            <div className={`flex ${openNavBar ? " translate-y-0" : "-translate-y-full"} fixed top-0 left-0 w-full h-full bg-[#ae1622] place-items-center justify-center transition-all ease-linear duration-300 z-50`}>
                <NavBar classes="flex flex-col gap-y-10 sm:hidden" />
                <span className=' absolute top-5 right-8 cursor-pointer hover:scale-125 transition-all ease-linear' onClick={() => setOpenNavBar(false)}>
                    <RiCloseFill size={25} />
                </span>
            </div>

        </div>
    )
}

export default Header
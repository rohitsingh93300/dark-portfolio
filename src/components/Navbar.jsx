import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaChevronRight } from 'react-icons/fa6'
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className='bg-transparent -mb-7 z-50 absolute w-full py-3 '>
            <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0'>
                {/* logo section */}
                <div>
                    <img src={Logo} alt="" className='w-[170px]' />
                </div>
                {/* Menu section */}
                <nav className='hidden md:block'>
                    <ul className='flex gap-7 text-lg items-center font-semibold text-white'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Testimonials</li>
                        <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 border-blue-400 border-2'>Contact<FaChevronRight /></button>
                    </ul>
                </nav>
                <div className='md:hidden text-white text-4xl'>
                    {
                        showMenu ? <HiMenuAlt3 onClick={toggleMenu}/> : <HiMenuAlt1 onClick={toggleMenu}/>
                    }
                </div>
 
            </div>
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    )
}

export default Navbar

import React, { useState } from 'react'
import { FaRainbow } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navItem = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" }
    ]

    return (
        <div>
            {/* desktop view menu or navbar */}
            <div className='hidden md:flex justify-between shadow-2xl py-3 px-8 border-b border-b-slate-300'>
                <div className='flex gap-4 items-center'>
                    <p className='text-2xl text-blue-600'><FaRainbow /></p>
                    <div className='text-sm'>
                        <p className='font-bold'>RESUME <span className='text-red-500'>ANALYZER</span></p>
                        <p className='text-gray-500 font-normal'>AI-Powered ATS Resume Checker</p>
                    </div>
                </div>
                <div>
                    <ul className='flex gap-4 my-2 font-medium'>
                        {
                            navItem.map(item => (
                                <NavLink className={({ isActive }) => `${isActive ? "text-red-500" : ""}`} key={item.name} to={item.path}>
                                    <li>
                                        {item.name}
                                    </li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* mobile view menu */}
            <div className='md:hidden'>
                <div className='flex justify-between items-center px-4 py-3.5 shadow-2xl'>
                    <div className='flex justify-center items-center gap-2'>
                        {menuOpen ?
                            <p onClick={()=> setMenuOpen(false)} className='text-2xl text-gray-800'><IoClose /></p>
                            :
                            <p onClick={()=> setMenuOpen(true)} className='text-2xl text-gray-800'><HiMenu /></p>}
                        <p className='font-bold'>RESUME <span className='text-red-500'>ANALYZER</span></p>
                    </div>
                    <p className='text-2xl text-blue-600'><FaRainbow /></p>
                </div>
                {
                    menuOpen && (
                        <div className='h-screen flex flex-col mt-3'>
                            <ul className='flex flex-col gap-3 my-2 font-medium px-6 mt-4'>
                                {
                                    navItem.map(item => (
                                        <NavLink onClick={()=> setMenuOpen(false)} className={({ isActive }) => `border px-3 py-2 rounded-full ${isActive ? "text-red-500 bg-red-50" : ""} `} key={item.name} to={item.path}>
                                            <li>
                                                {item.name}
                                            </li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
import React, { useState, useRef, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

//icons
import { LuMenu } from "react-icons/lu";

//image
import blog from '../assets/blog.png';

const Layout = ({ login, setlogin }) => {
    // toggle screen
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    //click handler for click anywhere to close
    const wrapperRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                // Clicked outside the component, so set showMenu to false
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            // Cleanup the event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);



    const location = useLocation();
    const excludedPath = '/dashboard';

    return (
        <div ref={wrapperRef}>
            {
                location.pathname === excludedPath ? null
                    :
                    (
                        <nav className='z-[100] relative w-full h-[80px] flex justify-between items-center px-[2rem]'>
                            {/* logo */}
                            <Link to="/" className='w-fit h-full flex items-center'>
                                <img src={blog} alt='logo' className='w-[10rem] aspect-auto' />
                            </Link>
                            {/* Menu */}
                            <LuMenu
                                onClick={toggleMenu}
                                className='text-[2rem] block md:hidden' />


                            <div className={`w-[80%] border-l-2 sm:border-0 sm:w-fit md:h-full h-[calc(100vh-80px)] md:block ${showMenu ? 'block' : 'hidden'} md:relative md:top-0 md:right-0 absolute top-[80px] right-0 bg-white`}
                            >
                                {
                                    !login &&
                                    <div className=' h-full flex md:flex-row flex-col items-center'>
                                        <Link onClick={toggleMenu}
                                            to="/login"
                                            className=' bg-black text-white '>
                                            <p className='px-[3rem] py-[.5rem] text-[1.1rem]'>Login</p>
                                        </Link>
                                        <Link
                                            onClick={toggleMenu}
                                            to="/signup"
                                            className='px-[3rem] py-[.5rem] text-[1.1rem]'>Signup</Link>
                                    </div>
                                }
                                {
                                    login &&
                                    <div className=' h-full flex md:flex-row flex-col  items-center '>
                                        <Link
                                            onClick={toggleMenu}
                                            to="/blog">
                                            <p className='px-[3rem] py-[.5rem] text-[1.2rem]'>Blog</p>
                                        </Link>
                                        <Link
                                            onClick={toggleMenu}
                                            to="/dashboard"
                                            className=' bg-black text-white '>
                                            <p className='px-[3rem] py-[.5rem] text-[1.2rem]'>Dashboard</p>
                                        </Link>
                                        <button
                                            onClick={toggleMenu}
                                            className='px-[3rem] py-[.5rem] text-[1.2rem]'>Log Out</button>
                                    </div>
                                }
                            </div>
                        </nav>
                    )
            }

            <Outlet />
        </div>
    )
}

export default Layout
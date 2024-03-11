import React, {  useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


//image
import blog from '../assets/blog.png';

//icons
import { LuMenu } from "react-icons/lu";

const DashboradNav = ({showMenu, setShowMenu}) => {

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
    }, [showMenu,setShowMenu]);

    return (
        <div ref={wrapperRef} className='sm:hidden w-full border-2 h-[80px] flex justify-between items-center px-4'>
            <LuMenu
                onClick={toggleMenu}
                className='text-[1.4rem] ' />
            <Link  className='w-fit h-full flex items-center'>
                <img src={blog} alt='logo' className='w-[10rem] aspect-auto' />
            </Link>
        </div>
    )
}

export default DashboradNav
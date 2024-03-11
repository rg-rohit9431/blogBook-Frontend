import React from 'react'
import { Link } from 'react-router-dom';


//icons
import { IoIosLogOut } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { IoPerson } from "react-icons/io5";



const Profile = ({ windowWidth, size, setAddform, setEditProfile }) => {
    return (
        <div className={`z-[100] bg-white ${windowWidth > 640 ? 'relative' : 'absolute '} w-[20%] min-w-[260px] h-[${size}] border-r-2 p-2`}>

            {/* image */}
            <div className='w-fit h-fit mx-auto'>
                <img src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-860.jpg?t=st=1709984169~exp=1709987769~hmac=9539843e1fc74ca44cda7cd1c9408a6bd4fcadaf7d8d00a5511b3283bc8dcd8b&w=740' alt='userImage' className='max-h-[150px] h-[40%] aspect-square mx-auto cursor-pointer rounded-full ' />
            </div>


            {/* name */}
            <div className='flex justify-between'>
                <div className=''>
                    <p className='text-[2.4rem] font-[700]'>Hello!</p>
                    <p className='text-[#116DFF] text-[1.6rem]'>Rohit Kumar Gupta</p>
                </div>
                <MdModeEdit
                    onClick={() => {
                        setAddform(false);
                        setEditProfile(true);
                    }}
                    className='text-[1.3rem] mr-1 cursor-pointer' />
            </div>

            {/* Followers Following */}
            <div className='flex justify-around items-center py-[1rem]'>
                <div className='flex items-center gap-[4px]'>
                    <IoPerson />
                    <p className=' cursor-pointer  hover:text-[#116DFF] text-[.9rem] '>
                        <span>10</span> Followers
                    </p>
                </div>
                <p className=' cursor-pointer flex items-center gap-[4px] hover:text-[#116DFF] text-[.9rem]'><span>100</span> Following</p>
            </div>

            {/* home */}
            <Link to='/'>
                <button className='mt-[.5rem] w-full text-start px-[1rem] rounded-sm py-[.5rem] text-[1.1rem]  hover:bg-black hover:text-white'>Home</button>
            </Link>

            {/* my blog */}
            <button className=' w-full text-start px-[1rem] rounded-sm py-[.5rem] text-[1.1rem]  hover:bg-black hover:text-white'>My Blogs</button>

            {/* logout */}
            <div className=' cursor-pointer rounded-md  flex gap-[1rem] items-center px-[1rem] py-[1rem] text-[1.2rem] absolute bottom-[3rem] hover:bg-black hover:text-white'>
                <button>Log Out</button>
                <IoIosLogOut className='text-[1.2rem]' />
            </div>
        </div>
    )
}

export default Profile
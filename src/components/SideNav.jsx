import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { IoArrowUpOutline } from "react-icons/io5";
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { TiThMenu } from "react-icons/ti";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu 
        size={30} 
        onClick={handleNav} 
        className='fixed top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='font-mussels fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav}href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav}href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'>Work</span>
            </a>
            <a onClick={handleNav}href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav}href='#about-me' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'>About Me</span>
            </a>
            <a onClick={handleNav}href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        ) : (
          <div className='md:block hidden fixed top-[25%] z-10 '>
            <div className='flex flex-col'>
            <a href='#main' className='group relative flex items-center justify-center rounded-full bg-dark_gray hover:scale-110 m-5 p-4 cursor-pointer transition-all ease-in duration-300 w-14 h-14'>
              <div className='inline-flex justify-center items-center '>
                <AiOutlineHome className='text-alien_green z-20' size={25} />
                <span className='absolute left-7 w-0 overflow-hidden bg-dark_gray rounded-r-full transition-all ease-in duration-200 group-hover:w-32 h-full flex items-center justify-center text-alien_green font-mussels text-opacity-0 group-hover:text-opacity-100'>Home</span>
              </div>
            </a>
            <a href='#work' className='group relative flex items-center justify-center rounded-full shadow bg-dark_gray hover:scale-110 m-5 p-4 cursor-pointer transition-all ease-in duration-200 w-14 h-14'>
              <div className='inline-flex justify-center items-center '>
                <GrProjects className='text-alien_green z-20' size={25} />
                <span className='absolute left-7 w-0 overflow-hidden bg-dark_gray rounded-r-full transition-all ease-in duration-200 group-hover:w-32 h-full flex items-center justify-center text-alien_green font-mussels text-opacity-0 group-hover:text-opacity-100'>Work</span>
              </div>
            </a>
            <a href='#projects' className='group relative flex items-center justify-center rounded-full shadow bg-dark_gray hover:scale-110 m-5 p-4 cursor-pointer transition-all ease-in duration-200 w-14 h-14'>
              <div className='inline-flex justify-center items-center '>
                <AiOutlineProject className='text-alien_green z-20' size={25} />
                <span className='absolute left-7 w-0 overflow-hidden bg-dark_gray rounded-r-full transition-all ease-in duration-200 group-hover:w-32 h-full flex items-center justify-center text-alien_green font-mussels text-opacity-0 group-hover:text-opacity-100'>Projects</span>
              </div>
            </a>
            <a href='#about-me' className='group relative flex items-center justify-center rounded-full shadow bg-dark_gray hover:scale-110 m-5 p-4 cursor-pointer transition-all ease-in duration-200 w-14 h-14'>
              <div className='inline-flex justify-center items-center '>
                <BsPerson className='text-alien_green z-20' size={25} />
                <span className='absolute left-7 w-0 overflow-hidden bg-dark_gray rounded-r-full transition-all ease-in duration-200 group-hover:w-32 h-full flex items-center justify-center text-alien_green font-mussels text-opacity-0 group-hover:text-opacity-100'>About</span>
              </div>
            </a>
            <a href='#contact' className='group relative flex items-center justify-center rounded-full shadow bg-dark_gray hover:scale-110 m-5 p-4 cursor-pointer transition-all ease-in duration-200 w-14 h-14'>
              <div className='inline-flex justify-center items-center '>
                <AiOutlineMail className='text-alien_green z-20' size={25} />
                <span className='absolute left-7 w-0 overflow-hidden bg-dark_gray rounded-r-full transition-all ease-in duration-200 group-hover:w-32 h-full flex items-center justify-center text-alien_green font-mussels text-opacity-0 group-hover:text-opacity-100'>Contact</span>
              </div>
            </a>
            </div>
          </div>
        )
      }
      <div>

      </div>
    </div>
  );
};

export default SideNav;
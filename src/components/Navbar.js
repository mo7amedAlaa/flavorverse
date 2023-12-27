import React from 'react';
import Logo from '../images/logo.png';
import Button from './Button';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {
  const [open, setOpen] = useState();
  return (
    <header className="w-full fixed z-20  bg-black  opacity-90 ">
      <nav className="flex w-full   py-2 md:py-3 px-4 md:px-20 items-center  justify-between  ">
        <a
          href="/"
          className=" flex items-center     tracking-wider  text-lg  cursor-pointer justify-center text-white "
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block   w-8 h-8 lg:w-14 hover:rotate-[45deg] hover:scale-110     lg:h-14"
          />
          Flavor<span className="text-green-500 ">Verse</span>
        </a>
        <ul className=" hidden md:flex relative   flex-row items-center gap-6  text-white ">
          <li className="  hover:text-green-500 relative  hover:border-b-green-500 transition-colors       ">
            <a href="/">Home</a>
          </li>
          <li className="  hover:text-green-500 relative  hover:border-b-green-500 transition-colors  ">
            <a href="/Erecipes">Explore</a>
          </li>
          <li className="  hover:text-green-500 relative  hover:border-b-green-500 transition-colors  ">
            <a href="/">Favorites</a>
          </li>
        </ul>
        <Button
          title={'Sign In'}
          containerStyle="  hidden md:block bg-transparent border border-white  hover:bg-green-500 hover:text-slate-700 min-w-[130px]  rounded-full text-white transition-all duration-1000 "
          textStyle={'font-bold'}
        />
        <button
          className="block md:hidden  text-white text-xl"
          onClick={() => setOpen((x) => !x)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div
        className={`${
          open ? 'flex' : 'hidden'
        } bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]  `}
      >
        <ul className=" flex   flex-col items-center gap-6  text-white ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Erecipes">Explore</a>
          </li>
          <li>
            <a href="/">Favorites</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

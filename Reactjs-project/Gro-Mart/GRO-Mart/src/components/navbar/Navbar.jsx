import React, { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import {Link} from 'react-router-dom';

function Navbar() {
  const [showmenu, setShowmenu] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  const togglemenu =()=>{
    setShowmenu(!showmenu);
  }
  useEffect(() => {
      const  HandleScroll = () =>{
        setisScroll(window.scrollY > 10)
        window.addEventListener('scroll', HandleScroll);
        return ()=> window.removeEventListener('scroll', HandleScroll)
      }
  }, [])
  
  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScroll ? "drop-shadow-[0_6px_15px_rgba(0,0,0,0.8)]" : ''}`}>
      <nav className=" max-w-315 mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between  items-center ">
        {/* logo  */}
        <Link to="/" className="text-3xl font-bold">
          GR<span className="text-orange-500 uppercase text-4xl ">O</span>
          Mart
        </Link>
        {/* desktop menu  */}
        <ul className="md:flex flex items-center gap-x-17 hidden ">
          <li>
            <a href="#" className="font-semibold tracking-wide text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800  hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* nav action  */}
        <div className="flex items-center gap-x-5">
          {/* input field  */}
          <div className="md:flex  p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="name"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl">
              <IoIosSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <IoMdHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <GiShoppingBag />
          </a>
{/* hamburger */}
          <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={togglemenu}>
           {showmenu ?  <TbMenu3 /> : <TbMenu2/>}
          </a>
        </div>
        {/* mobile menu   */}
        <ul className= {`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl  items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transtion-all duration-500 ${ showmenu ? 'left-1/2' : ""} `}>
          <li className="mt-4">
            <a href="#" className="font-semibold tracking-wide text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800  hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex  p-1 mb-2 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="name"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl">
              <IoIosSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

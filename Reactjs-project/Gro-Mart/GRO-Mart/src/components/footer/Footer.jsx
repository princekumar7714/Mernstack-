import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
function Footer() {
  return (
    <footer className="bg-zinc-100 py-20 md:h-[440px]">
      <div className=" flex flex-wrap max-w-315  gap-y-12 mx-auto  px-10 py-20">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            GR<span className="text-orange-500 uppercase text-4xl ">O</span>
            Mart
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Your one-stop destination for fresh, quality groceries. Bread for a
            hight content of beneficail substances.
          </p>
        <p className="text-zinc-800 mt-6">2025 &copy; All Rights Reserved</p>
        </div>
        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
                <a href="#"  className=" text-zinc-800 hover:text-orange-500 mt-6">About</a>
            </li>
            <li className="mt-6">    
                <a href="#" className="text-zinc-800 hover:text-orange-500 mt-6">FAQ'S</a>
            </li>
        </ul>

          <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
                <a href="#"  className=" text-zinc-800 hover:text-orange-500 mt-6">Support Center</a>
            </li>
            <li className="mt-6">    
                <a href="#" className="text-zinc-800 hover:text-orange-500 mt-6">FeedBack</a>
            </li>
            <li className="mt-6">    
                <a href="#" className="text-zinc-800 hover:text-orange-500 mt-6">Contact Us</a>
            </li>
        </ul>
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">Questions or Feedback <br />
          we'd love to here from you
          </p>
          <div className=" flex bg-white p-1 rounded-lg mt-6 ">
            <input type="email" id="email" name="email" placeholder="email.." autoComplete="off" className="h-[5vh] pl-4 flex-1 mt-1 focus:outline-none" />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl  hover: to-orange-600 cursor-pointer">
              <MdKeyboardArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

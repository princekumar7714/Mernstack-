import React from "react";
import grocery from '../../assets/grocery.png'
import Button from "../button/Button";
function Hero() {
  return (
    <section>
      <div className=" min-h-screen max-w-315 mx-auto  px-10 md:flex md:flex-row  items-center md:pt-25 pt-35 ">
        {/* hero content  */}
        <div className="flex-1"> 
            <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">Export Best Quality...</span>
            <h1 className="md:text-7xl/20 text-5xl/14 mt-4 font-bold">Tasty organic <span className="text-orange-500">Fruits</span> &  <span className="text-orange-500">veggies </span> <br /> In your City</h1>
            <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
                Bred for a high content of benefical substances. Our products are Fresh and Healthy. 
            </p>
            <Button content= "Shop Now"/>
        </div>
        {/* hero image  */}
        <div className="flex-1">

            <img src={grocery} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

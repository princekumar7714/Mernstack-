import React from "react";
import Heading from "../heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlantLight } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BiSolidTruck } from "react-icons/bi";

function Process() { 
  const renderSteps = steps.map((item) => {
    return (
      <div className={`flex-1 basis-[300] ${item.id % 2 === 0 ? 'md:-mt-90' : ' '}`}>
        <span className="flex justify-center items-center w-18 h-18 text-8xl mx-auto rounded-full text-white bg-zinc-800 outline-offset-7 outline-zinc-800 outline-dashed">{item.number}</span>
        <div className="flex items-center">
          <div className="flex items-center gap-x-5 mt-10  ">
            <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full ">{item.icon}</span>
          </div>
          <div className="flex-1 ">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2 ml-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="min-h-screen max-w-315 mx-auto  px-10 py-20 wright">
        <div className="w-fit mr-auto">
          <Heading highlight="our" other="Process" />
        </div>
        <div className="flex flex-wrap justify-center items-center  gap-y-17 md:mt-18 mt-10  md:pt-50 "> 
            {renderSteps}

        </div>
      </div>
    </section>
  );
}

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established facts that a reader ",
    icon: <PiPlantLight />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established facts that a reader ",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality control",
    para: "It is a long established facts that a reader ",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established facts that a reader ",
    icon: <BiSolidTruck />,
  },
];

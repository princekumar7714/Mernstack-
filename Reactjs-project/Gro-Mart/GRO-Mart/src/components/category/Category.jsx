import React from "react";
import Heading from "../heading/Heading";
import Fruitscat from "../../assets/fruits-and-veggies.png";
import seafoodcat from "../../assets/meat-and-seafood.png";
import Dairyeggs from "../../assets/dairy-and-eggs.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";

function Category() {
  const renderCard = category.map((card) => {
    return (
      // card
      <div className="flex-1 basis-[300px] " key={card.id}>
        {/* card img  */}
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={card.img} className="absolute bottom-0" />
        </div>
        {/* card content  */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">
            See All
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className=" max-w-315  mx-auto px-10 py-20">
        <Heading highlight="shop" other="by category" />

        {/* Category Card */}

        <div className="flex flex-wrap gap-10  md:mt-15">{renderCard}</div>
      </div>
    </section>
  );
}

export default Category;

const category = [
  {
    id: 1,
    title: "fruits & veggies",
    description:
      "fresh , organic produce sourced daily from local villages . And is a pure and non-chemical fruits from a farmers",
    img: Fruitscat,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy and Eggs",
    description:
      "Dairy products come from milk and include items like milk, yogurt, cheese, and butter. They are rich in calcium, protein.",
    img: Dairyeggs,
    path: '/dairy'
  },
  {
    id: 3,
    title: "Meat & fish",
    description:
      "Meat is animal flesh used as food—commonly beef, chicken, lamb, pork, and goat. It’s a rich source of high-quality protein.",
    img: seafoodcat,
    path: '/seafood'
  },
];

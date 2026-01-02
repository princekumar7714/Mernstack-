import React from "react";
import Heading from "../heading/Heading";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  return (
    <section>
      <div className="max-w-315 mx-auto  px-10 py-20">
        <Heading highlight="Customers" other="Saying" />
        <div className="flex justify-end mt-5  py-5 gap-x-3">
          <button className=" custom-prev text-2xl   text-zinc-800 rounded-lg w-11 h-11 flex justify-center  items-center bg-zinc-100 hover:bg-gradient-to-b  hover:from-orange-400 hover: to-orange-500 hover:text-white cursor-pointer">
            <MdKeyboardArrowLeft />
          </button>
          <button className="custom-Next text-2xl text-zinc-800  rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b  hover:from-orange-400 hover: to-orange-500 hover:text-white cursor-pointer">
            <MdKeyboardArrowRight />
          </button>
        </div>
        <Swiper
          navigation={{
            nextEl: ".custom-Next",
            prevElEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {groceryReviews.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                      <img src={item.image} className="w-full h-full" />
                  </div>
                
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

const groceryReviews = [
  {
    id: 1,
    name: "Amit Sharma",
    profession: "Home Chef",
    rating: 4.8,
    para: "This grocery website has completely changed how I shop for ingredients. The vegetables are always fresh, and the delivery is super fast. Highly recommended for anyone who loves cooking at home.",
    image: customer1,
  },
  {
    id: 2,
    name: "Neha Verma",
    profession: "Nutritionist",
    rating: 4.6,
    para: "I really like the quality of organic fruits and dairy products available here. The product descriptions are clear, which helps me choose healthier options for my clients.",
    image: customer2,
  },
  {
    id: 3,
    name: "Rohit Kumar",
    profession: "Software Engineer",
    rating: 4.5,
    para: "As a busy professional, this grocery platform saves me a lot of time. The app is easy to use, prices are reasonable, and customer support is reliable.",
    image: customer3,
  },
  {
    id: 4,
    name: "Pooja Singh",
    profession: "Working Parent",
    rating: 4.7,
    para: "Managing groceries for my family is much easier now. From fresh vegetables to daily essentials, everything arrives neatly packed and on time.",
    image: customer4,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    profession: "Fitness Trainer",
    rating: 4.9,
    para: "I trust this website for clean and fresh food items. The availability of healthy snacks, fruits, and dairy products fits perfectly with my fitness lifestyle.",
    image: customer5,
  },
];

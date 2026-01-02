import React, { useState } from "react";
import Heading from "../heading/Heading";
import ProductList from '../productList/Productlist.js'
import Cards from "../cards/Cards.jsx";
import { Link } from "react-router-dom";
function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [activeTab, setActiveTab] = useState("All");
  let FilterredItems = activeTab === "All" ? ProductList : ProductList.filter(item=>item.category === activeTab);
  const renderCards = FilterredItems.slice(0 , 8).map(products=>{
    return(
        <Cards image ={products.image} name ={products.name} price ={products.price} category = {products.category} key={products.id} />
    )
  })
  return (
    <section>
      <div className="max-w-315 mx-auto px-10 py-20">
        <Heading highlight="Our" other="products" />
        {/* Tabs  */}
        <div className="flex flex-wrap gap-3 justify-center mt-10 ">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                className={` px-5 py-2 text-lg rounded-lg cursor-pointer ${
                  activeTab === cat
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-300"}
                    
                 ` }     
                      onClick={()=>setActiveTab(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
        {/* products Lists  */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20" >
         {renderCards}
       </div>
       <div className="mt-15 mx-auto w-fit">
       <Link
            to='/allproducts'
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">
            See All
          </Link>
       </div>
      </div>
    </section>
  );
}

export default Products;

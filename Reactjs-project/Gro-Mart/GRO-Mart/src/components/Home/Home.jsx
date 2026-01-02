import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Category from '../category/category'
import Values from '../values/Values'
import Products from '../products/Products'
import Discount from '../Discount/Discount'
import Process from '../process/process'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'


function Home() {
  return (
    <div>
        
        <Hero/>
        <Category/>
        <Values/>
        <Products/>
        <Discount/>
        <Process/>
        <Testimonials/>
        
    </div>
  )
}

export default Home
import React from 'react'
import Button from '../button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'
function Discount() {
  return (
    <section className='bg-zinc-100 bg-right bg-no-repeat bg-contain' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className=' md:bg-transparent bg-zinc-100 flex md:flex-row flex-col  max-w-[315] mx-auto px-10 py-10'>  
            <span className='md:text-9xl text-6xl text-orange-500 font-bold md:-rotate-90 h-fit md:self-center'>20%</span>
           
           <div className='max-w-[160]'>
             <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First Order <br /> Discount </h3>
             <p className='text-zinc-600 my-6 '>
                Kick-start your grocery shopping with an exclusive 20% OFF on your first order! 🛒✨ Stock up on fresh fruits, vegetables, dairy, meat, and everyday essentials at unbeatable prices. It’s the perfect chance to save more while enjoying quality groceries delivered straight to your door. Don’t miss out—shop smart and make your first purchase extra rewarding!
            </p>
                <Button content= "Get a Discount"/>
           </div>
             </div>
    </section>
  )
}

export default Discount
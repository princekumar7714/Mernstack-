import React from 'react'
import Heading from "../heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'
function Values() {
  const leftValue = value.slice(0 , 2).map(item =>{
return(
  <div className='flex md:flex-row-reverse items-center gap-7' key={item.id}>
    <div >
      <span className='flex bg-gradient-to-b  from-orange-400 to-orange-500 w-15 h-15 rounded-full justify-center items-center text-3xl text-white'>{item.icon}</span>
    </div> 
    <div className='md:text-right'>
      <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
      <h4 className='text-zinc-600 mt-2'>{item.para}</h4>
    </div>
  </div>
)
  })
  const rightValue = value.slice( 2).map(item =>{
return(
  <div className='flex items-center gap-7' key={item.id}>
    <div >
      <span className='flex bg-gradient-to-b  from-orange-400 to-orange-500 w-15 h-15 rounded-full justify-center items-center text-3xl text-white'>{item.icon}</span>
    </div> 
    <div >
      <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
      <h4 className='text-zinc-600 mt-2'>{item.para}</h4>
    </div>
  </div>
)
  })
  return (
    <section>

        <div className=' max-w-315 mx-auto px-10 py-20'>
            <Heading highlight = "Our" other= "value"/>
        
        <div className='flex  mt-15 md:flex-row  gap-15 md:gap-5 flex-col'>
          {/* left value  */}
<div className='md:min-h-100 gap-15 flex flex-col justify-between'> 
  {leftValue}
</div>
<div className='md:flex w-1/2 hidden'>
  <img src={Basket }  />
</div>
{/* right value  */}
<div className='md:min-h-100 gap-15 flex flex-col justify-between' >
  {rightValue}
</div>
        </div>
        </div>
    </section>
  )
}

export default Values;

const value = [
  {
    id: 1,
    title : 'Trust',
    para : 'It is long established fact that a reader will be distracted by the readable',
    icon: <FaHeart/>
  },
  {
    id: 2,
    title : 'Always Fresh',
    para : 'It is long established fact that a reader will be distracted by the readable',
    icon: <FaLeaf/>
  },
  {
    id: 3,
    title : 'Food Safety',
    para : 'It is long established fact that a reader will be distracted by the readable',
    icon: <FaShieldAlt/>
  },
  {
    id: 4,
    title : '100%',
    para : 'It is long established fact that a reader will be distracted by the readable',
    icon: <FaSeedling/>
  },
]
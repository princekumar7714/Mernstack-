import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../productList/Productlist.js'

import Cards from '../cards/Cards'
// import products from '../productList/Productlist.js'

function Categorypage({title , bgImage , categories=[] }) {
    let FilterredItems = categories.includes('All') ? ProductList : ProductList.filter(item=>   categories.includes(item.category))
    const renderProduct = FilterredItems.map(item=>{
        return(
            <Cards image={item.image} name={item.name} price={item.price} />
        )
    })
  return (
    <div>
        <Banner title={title} bgImage={bgImage}/>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-5 max-w-[1400px] mx-auto px-10 mb-5'>
            {renderProduct}
        </div>
    </div>
  )
}

export default Categorypage;
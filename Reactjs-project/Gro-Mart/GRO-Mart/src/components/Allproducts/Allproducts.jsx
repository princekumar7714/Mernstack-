import React from 'react'

import BgAll from '../../assets/all-banner.jpg'
import Categorypage from '../categorypage/Categorypage'
function Allproducts() {
  return (
    <div>
        <Categorypage title="All Products" bgImage={BgAll} categories={['All']} />
    </div>
  )
}
 
export default Allproducts
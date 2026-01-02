import React from 'react'

import Categorypage from '../categorypage/Categorypage'
import BgSeafood from '../../assets/seafood-banner.jpg'

function Seafood() {
  return (
    <div>
     <Categorypage title="Meat and SeaFood" bgImage={BgSeafood} categories={['Meat' , 'Seafood']} />
    </div>
  )
}

export default Seafood
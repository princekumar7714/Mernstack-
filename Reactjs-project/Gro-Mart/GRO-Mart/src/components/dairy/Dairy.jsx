import React from 'react'
import Categorypage from '../categorypage/Categorypage'
import Bgdairy from '../../assets/dairy-banner.jpg'

function Dairy() {
  return (
    <div>
       <Categorypage title="Dairy and Eggs" bgImage={Bgdairy}  categories={'Dairy'}/>
    </div>
  )
}

export default Dairy
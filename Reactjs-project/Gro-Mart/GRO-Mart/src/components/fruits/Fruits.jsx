import React from "react";

import Categorypage from "../categorypage/Categorypage";
import Bgfruits from "../../assets/fruits-banner.jpg";

function Fruits() {
  return (
    <div>
      <Categorypage title="Fruits and Veggies" bgImage={Bgfruits}  categories={['Fruits', 'Vegetables']}/>
    </div>
  );
}

export default Fruits;

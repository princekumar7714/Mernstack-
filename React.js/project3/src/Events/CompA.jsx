import React, { useState } from 'react'

function CompA() {
    const[Data,setData] = useState("NULL");
    function handlechange(e){
        setData(e.target.value);
    }
  return (
    <div>
        <h1>Oninput Rvent</h1>
        <input type="text" value={Data} onInput={handlechange} />
        <hr />
        <h2>user Input : {Data}</h2>
    </div>
  )
}

export default CompA
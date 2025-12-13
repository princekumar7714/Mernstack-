import React from 'react'


function MapA() {
    let Fruits = ["Banana", "apple", "lithi", "pineapple"];
  return (
    <div>
        <h1>This is map method</h1>
        <ul>
            {Fruits.map((item, id)=>{
                return <li style={{border :"2px solid red", padding :"10px", backgroundColor: "yellow" }} key={id}>{item}</li>
            })}
        </ul>

    </div>
  )
}

export default MapA 
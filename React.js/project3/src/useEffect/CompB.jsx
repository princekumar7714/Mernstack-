import React, { useEffect, useState } from 'react'

function CompB() {
  const [state , setState] = useState(0);
  const [data1 , setData1] = useState(10);

       useEffect(()=>{
         console.log("use effect called");
     },[state,data1])
     function click(){
         setState(state + 20);
     }
     function click1(){
        setData1(data1 + 30);
     }
     console.log("function called")
       return (
     <div>Counter : {state}
     <br />
     <button onClick={click} >click</button>
         <div>Counter 2 : {data1}
     <br />
     <button onClick={click1} >click</button>
        
     </div>
     </div>

    
   )
}

export default CompB
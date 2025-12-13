import React, { useEffect, useState } from 'react'

function CompA() {
    const [state , setState] = useState(0);
    useEffect(()=>{
        console.log("use effect called");
    },[])
    function click(){
        setState(state + 20);
    }
    console.log("function called")
      return (
    <div>CompA : {state}
    <br />
    <button onClick={click} >click</button>
        {/* {console.log("jsx called")} */}
    </div>
  )
}

export default CompA
import React, { useEffect, useRef, useState } from 'react'

function CompD() {
    const [count, setcount] = useState(0);
    const prevCount = useRef();
    useEffect(()=>{
        prevCount.current = count;

    },[count]);

    function increment(){
        setcount(count + 5);
    }
  return (
    <div>
        <p>current count : {count}</p>
        <p>previous count : {prevCount.current}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default CompD
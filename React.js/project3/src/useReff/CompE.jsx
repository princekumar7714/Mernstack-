import React, { useRef } from "react";

function CompE() {
  const intField = useRef();
  function clickHandle() {
    console.log(intField.current.value);
    intField.current.style.border = "2px solid red";
     intField.current.style.background = "yellow";
  }
  return (
    <div>
      <input ref={intField} type="text" />
      <button onClick={clickHandle}>click</button>
    </div>
  );
}

export default CompE;

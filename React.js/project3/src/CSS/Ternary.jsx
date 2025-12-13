import React from "react";

function Ternary() {
  let value = true;
  return (
    <div>
      {value == true ? "you are eligible" : "you are not eligable"}
      <h1>Ternary</h1>
    </div>
  );
}

export default Ternary;

import React, { useReducer } from "react";

//creating a reducer function
const reducer = (state, action) => {
  if (action.type === "inc") {
    return state + 5;
  } else if (action.type === "dec") {
    return state - 5;
  } else if (action.type === "mul") {
    return state * 2;
  } else if (action.type === "div") {
    return state / 2;
  } else if (action.type === "reset") {
    return 0;
  }
  return state;
};

function CompA() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>count : {state}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "mul" })}>multiply</button>
      <button onClick={() => dispatch({ type: "div" })}>divison</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CompA;

//const [state , dispatch] = useReducer(Reducer, initialstate)

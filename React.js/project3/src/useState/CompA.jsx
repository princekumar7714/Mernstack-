import React, { useState } from 'react'

function CompA() {
  const [state, setState] = useState(50);
  function increment() {
    setState(state + 15);
  }
  function decrement() {
    setState(state - 10);
  }

  function divide() {
    setState(state / 2);
  }
  function multiply() {
    setState(state * 5);
  }
  function reset() {
    setState(50);
  }
  return (
    <div>
      <h1>Usestate Hook</h1>
      <h1>Counter: {state}</h1>
      <section>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={divide}>Divide</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
}

export default CompA
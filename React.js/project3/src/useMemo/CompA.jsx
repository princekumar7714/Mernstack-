import React, { useMemo, useState } from "react";
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function CompA() {
  const [num, setNum] = useState(10); // febanaci series
  const [count, setCount] = useState(10); // another operation

  function add() {
    setNum(num + 5);
  }
  function add1() {
    setCount(count + 5);
  }

  const valMemorized = useMemo(() => fib(num), [num]);
  return (
    <div>
      <h1>
        sum of Fiboanci series of {num} is {valMemorized}
      </h1>
      <button onClick={add}>incremnt</button>
      <hr />
      <h1>another operation value is : {count}</h1>
      <button onClick={add1}>increment count</button>
    </div>
  );
}

export default CompA;

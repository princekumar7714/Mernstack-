import React, { useRef, useState } from "react";

function CompC() {
  const [data, setData] = useState(0);
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  function counter() {
    setData(data + 1);
  }
  return (
    <div>
      <p>count : {data}</p>
      <p>component re-render: {renderCount.current} times </p>
      <button onClick={counter}>Increment</button>
    </div>
  );
}

export default CompC;

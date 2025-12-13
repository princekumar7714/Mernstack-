import React, { useRef } from 'react'

function CompB() {
    const inputRef = useRef(null);
    function handleFocus(){
        inputRef.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='type anthing' />
        <button onClick={handleFocus}>clcik</button>
    </div>
  )
}

export default CompB;
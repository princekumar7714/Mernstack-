import { useState } from "react";


function CompB() {
 
   const [state, setState] = useState(0);
   function increment(e) {
     setState(state + e);
   }
   function decrement(e) {
     setState(state - e);
   }
 
   function divide(e) {
     setState(state / e);
   }
   function multiply(e) {
     setState(state * e);
   }
   function reset() {
     setState(0);
   }
   return (
     <div>
       <h1>Usestate Hook</h1>
       <h1>Counter: {state}</h1>
       <section>
         <button onClick={()=>increment(10)}>increment</button>
         <button onClick={()=>decrement(5)}>Decrement</button>
         <button onClick={()=>divide(2)}>Divide</button>
         <button onClick={()=>multiply(6)}>multiply</button>
         <button onClick={reset}>Reset</button>
       </section>
     </div>
   );
}

export default CompB;
import React from 'react'
import CompB from './CompB';

function CompA() {
  return (
    <div>
        <h1>CompA</h1>
        <CompB/>
    </div>
  )
}

export default CompA;

// work in app.jsx
// 1=> create context 
// 2 => provider ---> wrap data 
// 3=> useContext --> get data
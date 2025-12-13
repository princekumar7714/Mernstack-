import React, { useContext } from 'react'
import { NameContext } from '../App';

function CompC() {
    const useNameContext = useContext(NameContext);
  return (
    <div>CompC
        <h2>{useNameContext.name}</h2>
        <h2>{useNameContext.value.name}</h2>
        <h2>{useNameContext.value.email}</h2>
    </div>
  )
}

export default CompC
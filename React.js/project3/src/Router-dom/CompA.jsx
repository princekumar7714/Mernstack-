import React from 'react'
import { useParams } from 'react-router-dom'

function CompA() {
    const {id} = useParams();
  return (
    <div>
        <h1>This is component A</h1>
        <h2>params: {id}</h2>
    </div>
  )
}

export default CompA
import React from 'react'
import useFetchApi from './useFetchApi';

function CompA() {
  const [data] = useFetchApi("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      
      {

        data.map((elm, id) => {
          return <div key={id}>
              <h2>Name : {elm.name}</h2>
              <p>Email : {elm.email}</p>
              <p>Username : {elm.username}</p>
          </div>
        }
    )  }

    </div>
  )
}

export default CompA
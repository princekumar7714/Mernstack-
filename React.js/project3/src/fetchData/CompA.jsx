import React, { useEffect, useState } from "react";

function CompA() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((Data) => setuserData(Data));
  },[]);
  console.log(userData);
  return <div>
  <h1>  User Data :</h1>
    {
      userData.map((data, id)=>(
        <section className="box" key={id}>
          {/* <h2>Name: {data.name}</h2> */}
          <h2>Name: {data.email}</h2>
          <h2>Name: {data.address.zipcode}</h2>
        </section>
      ))
    }
  </div>;
}

export default CompA;

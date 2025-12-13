import React, { useEffect, useState } from "react";

function useFetchApi(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function myData() {
      const response = await fetch(url);
      const myRes = await response.json();
      setData(myRes);
    }
    myData();
  }, []);
  return [data];
}

export default useFetchApi;

import React, { useEffect, useState } from "react";
import axios from "axios";

const imageUrl = "http://54.200.101.218:5000/data";

//IMAGE TEST FOR base64 IMAGE FROM JSON DATA
export default function ImageTest() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch('http://54.200.101.218:5000/data')

      .then(res => res.json())
      .then(
        
        (result) => {
          setIsLoaded(true);
          setItems(result);

        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          //navigate(0);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items);

  return (
    <>
      <img src={`data:image/jpeg;base64,${items.data}`}/> 
    </>
  );
}
}
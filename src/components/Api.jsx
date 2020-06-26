import React from "react";


  const Api = async (fly_From, fly_To) => {
    const url = `https://api.skypicker.com/flights?flyFrom=${fly_From}&to=${fly_To}&dateFrom=27/06/2020&dateTo=27/07/2020&partner=picky&v=3&offset=0&limit=5`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    return data;
  }


export default Api;
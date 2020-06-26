import React, {useState, useEffect} from 'react';

import './App.css';


const url = 'https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3'
const App = () => {
  const [ flights, setFlights ] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    setFlights(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="App">
    
    <h2>Flights</h2>
    {flights.map((flight, index) => (
      <div key={index}>
        <p>{flight.flyFrom}</p>
        <p>{flight.flyTo}</p>


      </div>))};
    
    </div>
  )
}

export default App;

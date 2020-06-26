import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';
import './App.css';

const url = 'https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=27/06/2020&dateTo=27/07/2020&partner=picky&v=3&offset=0&limit=5'


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
        <p>Price: {flight.price} EUR</p>
        <h2>{flight.cityFrom}</h2>
        <p>From: {flight.flyFrom}</p>
        <h2>{flight.cityTo}</h2>
        <p>To: {flight.flyTo}</p>
        <p>Departure: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</p>
        <p>Arrival: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</p>
        <br/><hr/>
      </div>))}
    
    </div>
  )
}

export default App;

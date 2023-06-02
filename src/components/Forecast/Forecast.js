import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';


const Forecast = () => {
    let [city, setCity] = useState("");
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(e) {
        e.preventDefault();
        fetch (`https://api.weatherapi.com/v1/current.json?key=2f15c785d72743df8e644208233105&q=${uriEncodedCity}&aqi=no`)
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
    
    }

    return (
        <div>
           <h2>Current Weather</h2>
           <div><Conditions
                responseObj={responseObj} /></div>
           <form>
                <input
                    type='text'
                    placeholder='Enter City Here'
                    className='classes.textInput'
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                />
           <button className={classes.Button} onClick={getForecast}>Get Current Weather</button>
           </form>    
        </div>
    )
}

export default Forecast;
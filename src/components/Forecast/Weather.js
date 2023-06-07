// TODO:
// [_] use qs to URI encode
// [X] use axios instead of fetch api
// api url: `https://api.weatherapi.com/v1/current.json?key=2f15c785d72743df8e644208233105&q=${uriEncodedCity}&aqi=no`

import React from 'react'
import { useState } from 'react'
import "./Weather.css"
import axios from 'axios'

function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');

    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.weatherapi.com/v1/current.json?key=2f15c785d72743df8e644208233105&q=${loc}&aqi=no`;
        const req = axios.get(url);
        const response = await req;
        setWeather({
            descp: response.data.current.condition.text,
            temp: response.data.current.temp_c,
            city: response.data.location.name,
            humidity: response.data.current.humidity,
            press: response.data.current.pressure_mb,
        })

        setCity(response.data.location.name)

    }

 

    const Weath = () => {
        return <div>
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Temperature : {weather.temp} &#8451;
                </div>
                <div className="welement">
                    Humidity :{weather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {weather.press} mb
                </div>
            </div>
        </div>
    }
    return (<>
        <div className="weathhead">Weather Info</div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <input type="text" placeholder="city" name="loc" />
                    <button className="bttn">Search</button>
                </form>

                {weather && <Weath />}
            </div>
        </div>
    </>
    )
}

export default Weather;
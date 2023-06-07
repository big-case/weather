// TODO:
// [_] use qs to URI encode
// [X] use axios instead of fetch api
// [ ] error handling using axios
// api url: `https://api.weatherapi.com/v1/current.json?key=2f15c785d72743df8e644208233105&q=${uriEncodedCity}&aqi=no`

import React from 'react'
import { useState } from 'react'
import "./Weather.css"
import axios from 'axios'
// import qs from 'qs'

function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [err, setErr] = useState('');
    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value;
        // const encodedLoc = qs.stringify(loc);
        const url = `https://api.weatherapi.com/v1/current.json?key=2f15c785d72743df8e644208233105&q=${loc}&aqi=no`;
        axios.get(url)
        .then (res => { 
        setWeather({
            descp: res.data.current.condition.text,
            temp: res.data.current.temp_c,
            city: res.data.location.name,
            humidity: res.data.current.humidity,
            press: res.data.current.pressure_mb,
        })
        setCity(res.data.location.name)

    })
    .catch (err => {
        setErr(err);
    })
}

if (err) return (<div className="weathhead"><div className="welement">`Location Not Found`</div></div>); 

    const Weath = () => {
        return <div>
            <div className="winfo">
                Current Weather for {city}
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
                    <input type="text" placeholder="Enter city" name="loc" />
                    <button className="bttn">Search</button>
                </form>
                {weather && <Weath />}
            </div>
        </div>
    </>
    )
}

export default Weather;
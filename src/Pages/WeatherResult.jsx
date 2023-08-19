import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherResult.css";
import Rain from "../rain.png";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function WeatherResult() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("text");

  const [data, setWeatherData] = useState({
    celcius: 10,
    humidity: 10,
    name: "london",
    speed: 2,
  });

  const IconUrl = `http://openweathermap.org/img/w/${data.icon}.png`;

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=43bdd26838b5d3b369a50de0f0eaa049`;

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setWeatherData({
          ...data,
          celcius: res.data.main.temp,
          pressure: res.data.main.pressure,
          name: res.data.name,
          country: res.data.sys.country,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="weatherResult__div">
      <div className="weather__row">
        <h1 className="weather__header">
          {data.name}, {data.country}
        </h1>
        <img className="img" src={IconUrl} alt="" />
        <h1 className="weather__header"> {data.description} </h1>
        <h1 className="weather__header">Temperature: {data.celcius} &deg;C</h1>
        <h1 className="weather__header">Pressure: {data.pressure} mmHg</h1>
        <div className="wind">
          <h1 className="weather__header">Humidity: {data.humidity}%</h1>
          <h1 className="weather__header">Speed: {data.speed}km/h</h1>
        </div>
        <Link to="/">
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default WeatherResult;

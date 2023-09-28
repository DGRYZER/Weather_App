import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css'
const WeatherDisplay = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false); 
  const apiKey = '6783c6f371512588b3e482f47e68fd4d'; 
  useEffect(() => {
    if (location) {
      setLoading(true); 

      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

      axios
        .get(apiUrl, {
          params: {
            q: location,
            units: 'metric',
            appid: apiKey,
          },
        })
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setWeatherData(null);
          setLoading(false); 
        });
    }
  }, [location, apiKey]);

  return (
    <div id="weather-display">
      {loading ? ( 
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div>
          <h2>Weather in {location}</h2>
          <h2>Country {weatherData.sys.country}</h2>
          <div>
            Temperature: {weatherData.main.temp}°C
          </div>
          <div>
           Humidity: {weatherData.main.humidity}%
          </div>
          <div>
            <strong>Conditions:</strong> {weatherData.weather[0].description}
          </div>
        </div>
      ) : (
        <p>Location not found. Please check your input.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;

import React from 'react';
import './App.css';

const WeatherApp = () => {
  const weatherData = {
    temperature: 25,
    conditions: "Sunny",
  };

  const threshold = 20;
  const color = weatherData.temperature > threshold ? "red" : "blue";

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <p style={{ color }}>Temperature: {weatherData.temperature}°C</p>
      <p>Weather Conditions: {weatherData.conditions}</p>
    </div>
  );
};

export default WeatherApp;
